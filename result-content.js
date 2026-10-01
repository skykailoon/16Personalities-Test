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
export function getCombinedResult(r){
 const energy=getResultContent(r.e);
 if(!Number.isFinite(r.n)||r.n<0||r.n>100)throw new Error('Invalid percentage');
 const ns=r.n===50?null:r.n>50?'N':'S';
 const perception=ns?{side:ns,...perceptionContent[ns]}:{side:null,title:'两种观察方式，恰好平衡。',copy:'这次回答对 N 和 S 的支持相同。你可能会随着情境，在具体经验与整体可能性之间切换。'};
 const types=[...resultContent.E.types,...resultContent.I.types].filter(t=>(!energy.side||t[0]===energy.side)&&(!ns||t[1]===ns));
 return {energy,perception,code:(energy.side||'X')+(ns||'X'),types};
}
