const REPORT_ENDPOINT='https://formsubmit.co/ajax/08182b727e37bc6471501f2eace475b9';
const SITE_URL='https://skykailoon.github.io/16Personalities-Test/';
export function createReport(result,type,{confirmedAxes=[],id=crypto.randomUUID(),time=new Date(),test=false}={}){
 if(!/^[EI][NS][TF][JP]$/.test(type))throw new Error('Report requires exactly one personality');
 const pairs={ei:['E','I'],ns:['N','S'],tf:['T','F'],jp:['J','P'],stress:['较平稳','较敏感']};
 const names={ei:'能量方向',ns:'信息偏好',tf:'决策方式',jp:'生活节奏',stress:'压力与自信'};
 const report={_subject:`${test?'[设置测试，非客户报告] ':''}E/I 型人 · ${type} 测试报告`,_template:'table',_url:SITE_URL,'报告编号':id,'完成时间':new Intl.DateTimeFormat('zh-CN',{timeZone:'Asia/Kuala_Lumpur',dateStyle:'full',timeStyle:'long'}).format(time),'人格倾向':type};
 for(const [key,[a,b]] of Object.entries(pairs)){const axis=result.axes[key];if(!axis||![axis.positive,axis.negative].every(v=>Number.isFinite(v)&&v>=0&&v<=100))throw new Error('Invalid report score');report[names[key]]=`${a} ${axis.positive.toFixed(1)}% / ${b} ${axis.negative.toFixed(1)}%`;}
 report['说明']=`${confirmedAxes.length?'原题持平的维度通过答题者补充确认，确定一个人格；原始百分比保持不变。':''}百分比为本自定义题组的答题倾向，不是准确率或人格概率。压力与自信不改变四字母结果。报告不含逐题答案或客户身份信息。`;
 return report;
}
export async function deliverReport(payload,fetcher=fetch){
 const controller=new AbortController(),timer=setTimeout(()=>controller.abort(),45000);
 try{const response=await fetcher(REPORT_ENDPOINT,{method:'POST',keepalive:true,headers:{'Content-Type':'application/json',Accept:'application/json'},body:JSON.stringify(payload),signal:controller.signal});if(!response.ok)throw new Error('Email service unavailable');const data=await response.json();if(data.success!==true&&data.success!=='true')throw new Error('Email service rejected report');return /activat|confirm.*email|check.*(?:inbox|email)/i.test(data.message||'')?'activation':'accepted';}finally{clearTimeout(timer);}
}
