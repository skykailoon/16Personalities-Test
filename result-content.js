export const resultContent = {
 E: {title:'外向连接（E）',copy:'能量来自外部世界。倾向于边说边想、先行动后思考，在社交与互动中恢复状态。你的心理能量向外聚焦。你通过与他人交流和外部探索来充能，善于在群体与实时互动中激发灵感、展现影响力。',types:['ENTJ','ENTP','ENFJ','ENFP','ESTJ','ESFJ','ESTP','ESFP']},
 I: {title:'内向连接（I）',copy:'核心特征：能量来自内在世界。倾向于先想后说、先思考后行动，在独处与安静中恢复状态。你的心理能量向内凝结。你通过独处与自我沉思来恢复电量，拥有出色的自省能力与深度钻研的专注力。',types:['INTJ','INTP','INFJ','INFP','ISTJ','ISFJ','ISTP','ISFP']}
};
export function getResultContent(e){
 if(typeof e!=='number'||!Number.isFinite(e)||e<0||e>100)throw new Error('Invalid percentage');
 if(e===50)return {side:null,title:'两种充能方式，恰好平衡。',copy:'这次回答没有明显偏向 E 或 I。你可以结合平时的感受，观察自己更常在哪种环境里恢复状态。',types:[]};
 const side=e>50?'E':'I';return {side,...resultContent[side]};
}
