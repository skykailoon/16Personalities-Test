export const resultContent = {
 E: {title:'外向连接（E）',copy:'能量来自外部世界。倾向于边说边想、先行动后思考，在社交与互动中恢复状态。你的心理能量向外聚焦。你通过与他人交流和外部探索来充能，善于在群体与实时互动中激发灵感、展现影响力。',types:['ENTJ','ENTP','ENFJ','ENFP','ESTJ','ESFJ','ESTP','ESFP']},
 I: {title:'内向连接（I）',copy:'核心特征：能量来自内在世界。倾向于先想后说、先思考后行动，在独处与安静中恢复状态。你的心理能量向内凝结。你通过独处与自我沉思来恢复电量，拥有出色的自省能力与深度钻研的专注力。',types:['INTJ','INTP','INFJ','INFP','ISTJ','ISFJ','ISTP','ISFP']}
};
export function getResultContent(e){
 if(typeof e!=='number'||!Number.isFinite(e)||e<0||e>100)throw new Error('Invalid percentage');
 if(e===50)return {side:null,title:'两种充能方式，恰好平衡。',copy:'这次回答没有明显偏向 E 或 I。你可以结合平时的感受，观察自己更常在哪种环境里恢复状态。',types:[]};
 const side=e>50?'E':'I';return {side,...resultContent[side]};
}

export const perceptionContent = {
 N:{title:'直觉探索（N）',copy:'你更倾向于关注信息之间的联系、整体模式与未来可能性。面对新事物时，你常会追问背后的含义，联想到不同的发展方向，并通过想象与新观点探索世界。这里的直觉指信息偏好，不是情绪化判断。'},
 S:{title:'实感观察（S）',copy:'你更倾向于关注可观察的事实、具体细节与实际经验。面对新事物时，你常会从眼前的信息出发，通过实例、实践和清晰步骤理解情况，把想法落实到现实。这里的实感指信息偏好，不代表缺乏想象力。'}
};
export const decisionContent = {
 T:{title:'逻辑思考（T）',copy:'你做决定时更倾向于先分析事实、因果和逻辑一致性，比较不同方案的利弊，并重视判断标准与实际效率。面对分歧时，你通常希望先把问题讲清楚、找到有依据的解决方式。偏向 T 不代表没有感情，也不代表缺乏同理心。'},
 F:{title:'价值共情（F）',copy:'你做决定时更倾向于先考虑个人价值、他人的需要，以及选择会对人和关系产生什么影响。面对分歧时，你通常会关注彼此的感受，并寻找自己认同、也能照顾相关人的处理方式。偏向 F 不代表不讲逻辑，也不代表情绪容易失控。'}
};
export const lifestyleContent={
 J:{title:'有序安排（J）',copy:'你更倾向于预先安排、明确步骤和及时完成任务。清晰的计划与进度能帮助你掌握节奏，也更愿意在决定后推进落实。这不代表你无法灵活应变。'},
 P:{title:'灵活探索（P）',copy:'你更倾向于保留选择、随着新信息调整方向，并按当下情况灵活行动。开放的空间能帮助你探索不同可能。这不代表你缺乏责任感或无法完成计划。'}
};
const allTypes=[...resultContent.E.types,...resultContent.I.types];
export function getCombinedResult(r){
 for(const v of [r.e,r.n,r.t,r.j])if(!Number.isFinite(v)||v<0||v>100)throw new Error('Invalid percentage');
 const sides=[r.e,r.n,r.t,r.j].map((v,i)=>v===50?null:(v>50?['E','N','T','J']:['I','S','F','P'])[i]);
 const energy=getResultContent(r.e);
 const perception=sides[1]?{side:sides[1],...perceptionContent[sides[1]]}:{side:null,title:'N / S · 暂无明显偏向',copy:'这次回答对具体经验与整体可能性的支持相同，保留两侧的类型。'};
 const decision=sides[2]?{side:sides[2],...decisionContent[sides[2]]}:{side:null,title:'T / F · 暂无明显偏向',copy:'这次回答对逻辑依据与价值感受的支持相同，保留两侧的类型。'};
 const lifestyle=sides[3]?{side:sides[3],...lifestyleContent[sides[3]]}:{side:null,title:'J / P · 暂无明显偏向',copy:'这次回答对有序安排与灵活探索的支持相同，保留两侧的类型。'};
 return {energy,perception,decision,lifestyle,code:sides.map(x=>x||'X').join(''),types:allTypes.filter(t=>sides.every((s,i)=>!s||t[i]===s))};
}
