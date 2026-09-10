export const questions = [
{id:1,text:'你经常结交新朋友。',original:'You regularly make new friends.',direction:1,source:'截图 1 · 第 1 题',facet:'社交主动性'},
{id:2,text:'你喜欢参加团队活动。',original:'You enjoy participating in team-based activities.',direction:1,source:'截图 2 · 第 5 题',facet:'群体活动偏好'},
{id:3,text:'走向一个让你感兴趣的人，并主动与对方交谈，会让你觉得自在。',original:'You feel comfortable just walking up to someone you find interesting and striking up a conversation.',direction:1,source:'截图 3 · 第 4 题',facet:'社交主动性'},
{id:4,text:'比起集体活动，你更喜欢独自进行的爱好或活动。',original:'You enjoy solitary hobbies or activities more than group ones.',direction:-1,source:'截图 4 · 第 3 题',facet:'独处偏好'},
{id:5,text:'在社交聚会中，你通常会等别人先做自我介绍。',original:'You usually wait for others to introduce themselves first at social gatherings.',direction:-1,source:'截图 5 · 第 2 题',facet:'社交主动性'},
{id:6,text:'比起独自一人，你通常更喜欢和其他人待在一起。',original:'You usually prefer to be around others rather than on your own.',direction:1,source:'截图 6 · 第 1 题',facet:'群体活动偏好'},
{id:7,text:'你的朋友会用活泼、外向来形容你。',original:'Your friends would describe you as lively and outgoing.',direction:1,source:'截图 6 · 第 6 题',facet:'日常社交表现'},
{id:8,text:'你很容易与刚认识的人建立联系。',original:'You can easily connect with people you have just met.',direction:1,source:'截图 8 · 第 1 题',facet:'社交主动性'},
{id:9,text:'你会喜欢一份大部分时间都需要独自工作的职业。',original:'You would love a job that requires you to work alone most of the time.',direction:-1,source:'截图 9 · 第 3 题',facet:'独处偏好'},
{id:10,text:'比起安静、亲密的小空间，忙碌、热闹的氛围更吸引你。',original:'You feel more drawn to busy, bustling atmospheres than to quiet, intimate places.',direction:1,source:'截图 9 · 第 5 题',facet:'环境偏好'}
];
export const choices = ['非常赞成','赞成','稍微赞成','中立','稍微不赞成','不赞成','非常不赞成'];
export const values = [3,2,1,0,-1,-2,-3];
export function score(answers){
 if(!Array.isArray(answers)||answers.length!==questions.length||answers.some(a=>!Number.isInteger(a)||a < -3||a > 3))throw new Error('请完成所有题目后再查看结果。');
 const points=answers.map((a,i)=>3+questions[i].direction*a);
 const total=points.reduce((a,b)=>a+b,0),maximum=questions.length*6;
 const e=Math.round(total/maximum*1000)/10;
 return {e,i:Math.round((100-e)*10)/10,total,maximum,points};
}
