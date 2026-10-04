import {questions,choices,values,score,AXES,PAGE_SIZE,PAGE_COUNT,pageQuestions,firstMissing} from './questions.js';
import {getCombinedResult} from './result-content.js';
const $=id=>document.getElementById(id);
let answers=Array(questions.length).fill(null),current=0;
const pairs={ei:['E','I'],ns:['N','S'],tf:['T','F'],jp:['J','P'],stress:['较平稳','较敏感']};
function updateProgress(){const count=answers.filter(v=>values.includes(v)).length;$('counter').textContent=`${count} / ${questions.length} 已答`;$('progress').style.width=`${count/questions.length*100}%`;document.querySelector('[role="progressbar"]').setAttribute('aria-valuenow',count);}
function showPage(page,focus=false){
 const items=pageQuestions(page);current=page;$('quiz').hidden=false;$('results').hidden=true;
 $('page-title').textContent=`第 ${page+1} / ${PAGE_COUNT} 页`;
 $('question-panel').innerHTML=items.map(q=>`<fieldset id="q${q.id}" class="question"><legend><span class="number">${String(q.id).padStart(2,'0')}</span>${q.text}</legend><div class="options">${choices.map((label,i)=>`<label class="option ${i<3?'agree':i>3?'disagree':'neutral'}"><input type="radio" name="q${q.id}" value="${values[i]}" ${answers[q.id-1]===values[i]?'checked':''}><span>${label}</span></label>`).join('')}</div></fieldset>`).join('');
 $('question-panel').querySelectorAll('input').forEach(input=>input.onchange=()=>{const index=Number(input.name.slice(1))-1;answers[index]=Number(input.value);input.closest('fieldset').classList.remove('missing');$('feedback').textContent=`第 ${index+1} 题已选择「${choices[values.indexOf(answers[index])]}」。`;updateProgress();});
 $('back').disabled=page===0;$('next').textContent=page===PAGE_COUNT-1?'查看我的结果 →':'下一页 →';$('feedback').textContent='慢慢来，选择最贴近自己的程度。';updateProgress();
 if(focus){$('page-title').focus();$('page-title').scrollIntoView({block:'start'});}
}
function highlightMissing(index){const q=$(`q${index+1}`);q.classList.add('missing');$('feedback').textContent=`第 ${index+1} 题还未作答，请先完成本页 6 题。`;q.querySelector('input').focus();q.scrollIntoView({block:'center'});}
function axisMarkup(axis,content,key){const [a,b]=pairs[key];return `<section class="axis-result ${key}"><h3>${content.title}</h3><div class="result-numbers"><span>${a} <strong>${axis.positive.toFixed(1)}%</strong></span><span>${b} <strong>${axis.negative.toFixed(1)}%</strong></span></div><div class="result-bar" role="img" aria-label="${a} ${axis.positive}%，${b} ${axis.negative}%"><span style="width:${axis.positive}%"></span></div><p>${content.copy}</p></section>`;}
function showResults(){
 const missing=firstMissing(answers);if(missing!==-1){showPage(Math.floor(missing/PAGE_SIZE));highlightMissing(missing);return;}
 const r=score(answers),c=getCombinedResult(r),stress=r.axes.stress;
 const supplement={title:'压力与自信自评',copy:stress.positive===50?'本次回答在平稳与敏感之间保持平衡。':stress.positive>50?'这次回答显示，你较常感到自信，面对压力时也较能维持平稳。':'这次回答显示，你较容易留意压力、担心与自我怀疑，也可能更敏锐地觉察变化。'};
 $('quiz').hidden=true;$('results').hidden=false;
 $('results').innerHTML=`<h2 id="result-title" tabindex="-1">你的倾向：${c.code}</h2><p class="muted">由你的 60 道回答，描绘此刻的自己。</p>
 ${axisMarkup(r.axes.ei,c.energy,'ei')}${axisMarkup(r.axes.ns,c.perception,'ns')}${axisMarkup(r.axes.tf,c.decision,'tf')}${axisMarkup(r.axes.jp,c.lifestyle,'jp')}
 <section class="related-types"><h3>与你的倾向相符的人格</h3><div class="type-grid">${c.types.map(t=>`<span>${t}</span>`).join('')}</div><p class="muted">${c.code.includes('X')?'X 表示该维度为 50% / 50%，保留两侧类型。':'四字母组合对应本次作答的主要倾向。'}</p></section>
 ${axisMarkup(stress,supplement,'stress')}<p class="muted">压力与自信是独立补充，不改变四字母结果，也不是心理健康诊断。</p>
 <p class="result-note">百分比是自定义题组的答题倾向，不是人格概率或准确率。题目翻译和权重尚未经样本验证；本测试非官方 MBTI／16Personalities 测评。</p>
 <details><summary>回顾答案与计分 · 60 题</summary><p class="muted">各维度独立累计，另一侧为 100% 减去这一侧。主要权重为 1；有明确次要语义的题目暂计 0.5，不代表已验证的相关性。</p>${questions.map((q,i)=>`<article class="review-item"><button class="text-button" data-edit="${i}">修改</button><h4>${q.id}. ${q.text}</h4><p>${choices[values.indexOf(answers[i])]} · ${AXES.filter(axis=>q.weights[axis]).map(axis=>`${pairs[axis][0]} ${r.axes[axis].points[i]} 分 / ${pairs[axis][1]} ${6*Math.abs(q.weights[axis])-r.axes[axis].points[i]} 分`).join('；')}</p><details><summary>归类理由</summary><p>${q.original}</p><p>${q.source} · ${q.rationale}${q.secondaryRationale?' '+q.secondaryRationale:''}</p><p>赞成方向：${AXES.filter(axis=>q.weights[axis]).map(axis=>`${pairs[axis][q.weights[axis]>0?0:1]}（权重 ${Math.abs(q.weights[axis])}）`).join('、')}；不赞成方向相反。</p></details></article>`).join('')}</details>
 <div class="navigation"><button id="review" class="primary">回顾答案</button><button id="restart" class="text-button">重新测试</button></div>`;
 $('results').querySelectorAll('[data-edit]').forEach(b=>b.onclick=()=>{const index=Number(b.dataset.edit);showPage(Math.floor(index/PAGE_SIZE));$(`q${index+1}`).querySelector('input:checked').focus();});
 $('review').onclick=()=>showPage(0,true);$('restart').onclick=()=>{answers=Array(questions.length).fill(null);showPage(0,true);};$('result-title').focus();$('result-title').scrollIntoView({block:'start'});return r;
}
$('back').onclick=()=>{if(current>0)showPage(current-1,true);};
$('next').onclick=()=>{const missing=firstMissing(answers,current);if(missing!==-1){highlightMissing(missing);return;}if(current<PAGE_COUNT-1)showPage(current+1,true);else showResults();};
showPage(0);
if(document.modelContext?.registerTool){
 const lifecycle=new AbortController();window.addEventListener('pagehide',()=>lifecycle.abort(),{once:true});
 const empty={type:'object',properties:{},additionalProperties:false};
 const tools=[
 {name:'read_ei_test',description:'Read all 60 questions and current answers for E/I, N/S, T/F, J/P and a separate stress self-report.',inputSchema:empty,annotations:{readOnlyHint:true},execute:()=>({questions:questions.map(q=>({id:q.id,text:q.text})),page:current+1,answers:answers.map((value,i)=>({id:i+1,value})),result:firstMissing(answers)===-1?score(answers):null})},
 {name:'answer_ei_questions',description:'Record explicitly supplied user answers, from -3 to 3. Does not submit results.',inputSchema:{type:'object',properties:{answers:{type:'array',minItems:1,items:{type:'object',properties:{id:{type:'integer',minimum:1,maximum:60},value:{type:'integer',minimum:-3,maximum:3}},required:['id','value'],additionalProperties:false}}},required:['answers'],additionalProperties:false},annotations:{readOnlyHint:false},execute:input=>{const entries=input?.answers;if(!Array.isArray(entries)||!entries.length||entries.some(a=>!Number.isInteger(a.id)||a.id<1||a.id>60||!values.includes(a.value))||new Set(entries.map(a=>a.id)).size!==entries.length)throw new Error('Invalid answers');entries.forEach(a=>answers[a.id-1]=a.value);showPage(Math.floor((entries.at(-1).id-1)/PAGE_SIZE));return{completed:answers.filter(a=>values.includes(a)).length};}},
 {name:'complete_ei_test',description:'Calculate and display results only after all 60 questions are answered.',inputSchema:empty,annotations:{readOnlyHint:false},execute:()=>{score(answers);return showResults();}}
 ];for(const tool of tools){try{Promise.resolve(document.modelContext.registerTool(tool,{signal:lifecycle.signal})).catch(()=>{});}catch{}}
}
