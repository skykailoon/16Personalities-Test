import {questions,choices,values,score,AXES,PAGE_SIZE,PAGE_COUNT,pageQuestions,firstMissing} from './questions.js';
import {getCombinedResult} from './result-content.js';
const $=id=>document.getElementById(id);
let answers=Array(questions.length).fill(null),current=0,busy=false,revealObserver=null;
const reducedMotion=()=>window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const pause=ms=>new Promise(resolve=>setTimeout(resolve,reducedMotion()?0:ms));
const pairs={ei:['E','I'],ns:['N','S'],tf:['T','F'],jp:['J','P'],stress:['较平稳','较敏感']};
const screens=['welcome','notice','imagine','quiz','results'];
function screen(name,heading){revealObserver?.disconnect();revealObserver=null;for(const id of screens)$(id).hidden=id!==name;if(heading){$(heading).focus();window.scrollTo({top:0});}}
const characterTypes=['INTJ','INTP','ENTJ','ENTP','INFJ','INFP','ENFJ','ENFP','ISTP','ISFP','ESTP','ESFP','ISTJ','ISFJ','ESTJ','ESFJ'];
function characterMarkup(type){const i=characterTypes.indexOf(type);if(i<0)return '';const x=[105,410,730,1085][i%4],y=[0,0,0,0,280,285,280,280,542,546,540,540,789,789,789,783][i],h=[229,229,229,229,213,212,223,218,196,198,202,199,188,196,188,192][i];return `<div class="character" style="aspect-ratio:340/${h}" role="img" aria-label="${type} 人格人物插画"><img src="assets/personalities.jpg" alt="" style="left:${-x/340*100}%;top:${-y/h*100}%" width="1536" height="1024"></div>`;}
function haloStyle(v){const i=v<0?3:v;return `--halo-left:calc(${i/6*100}% + ${22-44*i/6}px);--halo-size:${[42,34,26,20,26,34,42][i]}px;--halo-color:${i<3?'var(--green)':i>3?'var(--purple)':'#928b7f'}`;}
function updateProgress(){const count=answers.filter(v=>values.includes(v)).length;$('counter').textContent=`${count} / ${questions.length} 已答`;$('progress').style.width=`${count/questions.length*100}%`;$('progress').classList.toggle('has-progress',count>0);document.querySelector('[role="progressbar"]').setAttribute('aria-valuenow',count);}
function showPage(page,focus=false){
 const items=pageQuestions(page);current=page;screen('quiz');
 $('page-title').textContent=`第 ${page+1} / ${PAGE_COUNT} 页`;
 $('question-panel').innerHTML=items.map(q=>{const answer=answers[q.id-1],selected=values.indexOf(answer);return `<fieldset id="q${q.id}" class="question"><legend id="label${q.id}"><span class="number">${String(q.id).padStart(2,'0')}</span>${q.text}</legend><div class="scale-labels" aria-hidden="true"><span>赞成</span><span>不赞成</span></div><div class="scale ${selected>=0?'answered':''}" style="${haloStyle(selected)}">${choices.map((label,i)=>`<span aria-hidden="true" class="scale-dot ${i<3?'agree':i>3?'disagree':'neutral'} ${selected===i?'selected':''}" style="--size:${[42,34,26,20,26,34,42][i]}px;left:calc(${i/6*100}% + ${22-44*i/6}px)"></span>`).join('')}<span class="halo-switch" aria-hidden="true"><span class="halo-aura"></span><span class="halo-core"></span></span><input type="range" min="0" max="6" step="1" value="${selected<0?3:selected}" aria-labelledby="label${q.id}" aria-describedby="slider-help" aria-valuetext="${selected<0?'未作答':choices[selected]}" data-index="${q.id-1}"></div></fieldset>`;}).join('');
 $('question-panel').querySelectorAll('input').forEach(input=>{const choose=()=>{const index=Number(input.dataset.index),v=Number(input.value);const changed=answers[index]!==values[v];answers[index]=values[v];input.parentElement.style.cssText=haloStyle(v);if(changed&&!window.matchMedia('(prefers-reduced-motion: reduce)').matches){const aura=input.parentElement.querySelector('.halo-aura');aura.getAnimations().forEach(a=>a.cancel());aura.animate([{transform:'scale(.85)',opacity:.3},{transform:'scale(1.16)',opacity:.8,offset:.45},{transform:'scale(1)',opacity:1}],{duration:420,easing:'ease-out'});}input.setAttribute('aria-valuetext',choices[v]);input.closest('fieldset').classList.remove('missing');input.parentElement.classList.add('answered');input.parentElement.querySelectorAll('.scale-dot').forEach((dot,i)=>dot.classList.toggle('selected',i===v));$('feedback').textContent='已记录你的选择。';updateProgress();};input.oninput=choose;input.onpointerdown=()=>input.parentElement.classList.add('dragging');input.onpointerup=()=>{input.parentElement.classList.remove('dragging');choose();};input.onpointercancel=()=>input.parentElement.classList.remove('dragging');input.onblur=()=>input.parentElement.classList.remove('dragging');input.onkeydown=event=>{if(event.key===' '||event.key==='Enter'){event.preventDefault();choose();}};});
 $('back').disabled=page===0;$('next').innerHTML=page===PAGE_COUNT-1?'<span class="submit-label">提交</span><svg class="submit-check" viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12.5 9.5 17 19 7"/></svg>':'下一页 →';$('next').classList.toggle('submit-button',page===PAGE_COUNT-1);$('feedback').textContent='慢慢来，选择最贴近自己的程度。';updateProgress();
 revealItems($('question-panel').querySelectorAll('.question'));
 if(focus){$('page-title').focus();$('page-title').scrollIntoView({block:'start'});}
}
function highlightMissing(index){const q=$(`q${index+1}`);q.classList.add('missing');$('feedback').textContent=`第 ${index+1} 题还未作答，请先完成本页 6 题。`;q.querySelector('input').focus();q.scrollIntoView({block:'center'});}
function dataMarkup(axis,key){const [a,b]=pairs[key],titles={ei:'能量方向',ns:'信息偏好',tf:'决策方式',jp:'生活节奏',stress:'压力与自信'};return `<div class="data-row ${key}"><div class="data-heading"><span>${titles[key]}</span><strong>${axis.positive===50?'倾向均衡':(axis.positive>50?a:b)+' '+Math.max(axis.positive,axis.negative).toFixed(1)+'%'}</strong></div><div class="data-track" role="img" aria-label="${a} ${axis.positive}%，${b} ${axis.negative}%"><i style="left:${axis.negative}%"></i></div><div class="data-labels"><span>${a} ${axis.positive.toFixed(1)}%</span><span>${b} ${axis.negative.toFixed(1)}%</span></div></div>`;}
function explanation(content,key){return `<section class="explanation ${key}"><h3>${content.title}</h3><p>${content.copy}</p></section>`;}
function showResults(){
 const missing=firstMissing(answers);if(missing!==-1){showPage(Math.floor(missing/PAGE_SIZE));highlightMissing(missing);return;}
 const r=score(answers),c=getCombinedResult(r),stress=r.axes.stress;
 const supplement={title:'压力与自信自评',copy:stress.positive===50?'本次回答在平稳与敏感之间保持平衡。':stress.positive>50?'这次回答显示，你较常感到自信，面对压力时也较能维持平稳。':'这次回答显示，你较容易留意压力、担心与自我怀疑，也可能更敏锐地觉察变化。'};
 screen('results');
 $('results').innerHTML=`<p class="save-reminder">请截图保存下方结果，留下一份此刻的自己。</p><section class="result-card" aria-label="人格与全部测试数据"><div class="result-identity"><p class="eyebrow">你的性格倾向</p><h2 id="result-title" tabindex="-1">${c.code}</h2>${c.code.includes('X')?'<p class="muted">部分维度暂时均衡</p>':characterMarkup(c.code)}</div><div class="all-data">${AXES.map(key=>dataMarkup(r.axes[key],key)).join('')}</div></section>
 ${c.code.includes('X')?`<details class="possible-types"><summary>查看与你倾向相符的人格人物</summary><p class="muted">X 表示该维度为 50% / 50%，因此保留两侧类型。</p><div class="character-grid">${c.types.map(t=>`<article>${characterMarkup(t)}<h3>${t}</h3></article>`).join('')}</div></details>`:''}
 <div class="explanations"><h2>进一步认识自己</h2>${explanation(c.energy,'ei')}${explanation(c.perception,'ns')}${explanation(c.decision,'tf')}${explanation(c.lifestyle,'jp')}${explanation(supplement,'stress')}</div><p class="muted">压力与自信是独立补充，不改变四字母结果，也不是心理健康诊断。</p>
 <p class="result-note">百分比是自定义题组的答题倾向，不是人格概率或准确率。题目翻译和权重尚未经样本验证；本测试非官方 MBTI／16Personalities 测评。</p>
 <details><summary>回顾答案与计分 · 60 题</summary><p class="muted">各维度独立累计，另一侧为 100% 减去这一侧。主要权重为 1；有明确次要语义的题目暂计 0.5，不代表已验证的相关性。</p>${questions.map((q,i)=>`<article class="review-item"><button class="text-button" data-edit="${i}">修改</button><h4>${q.id}. ${q.text}</h4><p>${choices[values.indexOf(answers[i])]} · ${AXES.filter(axis=>q.weights[axis]).map(axis=>`${pairs[axis][0]} ${r.axes[axis].points[i]} 分 / ${pairs[axis][1]} ${6*Math.abs(q.weights[axis])-r.axes[axis].points[i]} 分`).join('；')}</p><details><summary>归类理由</summary><p>${q.original}</p><p>${q.source} · ${q.rationale}${q.secondaryRationale?' '+q.secondaryRationale:''}</p><p>赞成方向：${AXES.filter(axis=>q.weights[axis]).map(axis=>`${pairs[axis][q.weights[axis]>0?0:1]}（权重 ${Math.abs(q.weights[axis])}）`).join('、')}；不赞成方向相反。</p></details></article>`).join('')}</details>
 <div class="navigation"><button id="review" class="primary">回顾答案</button><button id="restart" class="text-button">重新测试</button></div>`;
 $('results').querySelectorAll('[data-edit]').forEach(b=>b.onclick=()=>{const index=Number(b.dataset.edit);showPage(Math.floor(index/PAGE_SIZE));$(`q${index+1}`).querySelector('input').focus();});
 $('review').onclick=()=>showPage(0,true);$('restart').onclick=()=>{answers=Array(questions.length).fill(null);screen('welcome','welcome-title');};$('results').removeAttribute('aria-busy');$('result-title').focus({preventScroll:true});window.scrollTo({top:0});revealItems($('results').querySelectorAll('.save-reminder,.result-identity,.data-row,.possible-types,.explanations>h2,.explanation,.result-note,.navigation'),true);return r;
}
function revealItems(nodes,onScroll=false){
 if(reducedMotion())return;
 const reveal=(node,delay)=>{node.classList.remove('reveal-wait');node.animate([{opacity:0,transform:'translateY(12px)'},{opacity:1,transform:'translateY(0)'}],{duration:440,delay,fill:'backwards',easing:'cubic-bezier(.2,.7,.3,1)'});const marker=node.querySelector('.data-track i');if(marker)marker.animate([{left:'50%'},{left:marker.style.left}],{duration:850,delay:delay+100,easing:'cubic-bezier(.2,.7,.3,1)'});};
 if(onScroll&&'IntersectionObserver' in window){
  revealObserver=new IntersectionObserver(entries=>{let order=0;for(const entry of entries){if(entry.isIntersecting){reveal(entry.target,order++*75);revealObserver.unobserve(entry.target);}}},{threshold:.08});
  nodes.forEach(node=>{node.classList.add('reveal-wait');revealObserver.observe(node);});
 }else nodes.forEach((node,i)=>reveal(node,i*65));
}
function springButton(button){
 const press=()=>{if(!button.disabled&&!busy){button.getAnimations().forEach(a=>a.cancel());button.classList.add('pressed');}};
 const release=()=>{if(!button.classList.contains('pressed'))return;button.classList.remove('pressed');if(!reducedMotion())button.animate([{transform:'scale(.95)'},{transform:'scale(1.035)',offset:.5},{transform:'scale(.99)',offset:.78},{transform:'scale(1)'}],{duration:360,easing:'ease-out'});};
 button.addEventListener('pointerdown',press);button.addEventListener('pointerup',release);button.addEventListener('pointercancel',()=>button.classList.remove('pressed'));button.addEventListener('pointerleave',()=>button.classList.remove('pressed'));
 button.addEventListener('keydown',e=>{if(e.key===' '||e.key==='Enter')press();});button.addEventListener('keyup',release);button.addEventListener('blur',()=>button.classList.remove('pressed'));
}
async function submitResults(){
 if(busy)return;
 const missing=firstMissing(answers);if(missing!==-1){showPage(Math.floor(missing/PAGE_SIZE));highlightMissing(missing);return;}
 score(answers);busy=true;const button=$('next');button.getAnimations().forEach(a=>a.cancel());button.classList.remove('pressed');button.style.setProperty('--submit-width',button.getBoundingClientRect().width+'px');button.classList.add('submitting');button.disabled=true;$('back').disabled=true;$('question-panel').inert=true;button.setAttribute('aria-label','正在提交');
 try{
  await pause(130);button.classList.add('morphing');await pause(260);button.classList.add('submit-success');button.setAttribute('aria-label','提交完成');$('feedback').textContent='提交完成，正在整理你的结果。';await pause(430);
  button.classList.remove('morphing','submit-success');await pause(260);button.classList.remove('submitting');button.style.removeProperty('--submit-width');button.removeAttribute('aria-label');
  screen('results');$('results').setAttribute('aria-busy','true');$('results').innerHTML=`<p role="status" class="loading-message" tabindex="-1">正在整理你的性格结果…</p><div class="result-card skeleton-card" aria-hidden="true"><div class="skeleton-identity"><div class="skeleton skeleton-title"></div><div class="skeleton skeleton-picture"></div></div><div class="all-data">${Array.from({length:5},()=>'<div class="skeleton-row"><div class="skeleton skeleton-caption"></div><div class="skeleton skeleton-bar"></div></div>').join('')}</div>`;$('results').querySelector('.loading-message').focus({preventScroll:true});window.scrollTo({top:0});await pause(700);return showResults();
 }finally{busy=false;button.disabled=false;$('back').disabled=current===0;$('question-panel').inert=false;button.classList.remove('submitting','morphing','submit-success');button.style.removeProperty('--submit-width');button.removeAttribute('aria-label');$('results').removeAttribute('aria-busy');}
}
springButton($('back'));springButton($('next'));
$('back').onclick=()=>{if(!busy&&current>0)showPage(current-1,true);};
$('next').onclick=()=>{if(busy)return;const missing=firstMissing(answers,current);if(missing!==-1){highlightMissing(missing);return;}if(current<PAGE_COUNT-1)showPage(current+1,true);else void submitResults();};
$('begin').onclick=()=>screen('notice','notice-title');
$('notice-next').onclick=()=>screen('imagine','imagine-title');
$('quiz-start').onclick=()=>showPage(0,true);
screen('welcome');
if(document.modelContext?.registerTool){
 const lifecycle=new AbortController();window.addEventListener('pagehide',()=>lifecycle.abort(),{once:true});
 const empty={type:'object',properties:{},additionalProperties:false};
 const tools=[
 {name:'read_ei_test',description:'Read all 60 questions and current answers for E/I, N/S, T/F, J/P and a separate stress self-report.',inputSchema:empty,annotations:{readOnlyHint:true},execute:()=>({questions:questions.map(q=>({id:q.id,text:q.text})),page:current+1,answers:answers.map((value,i)=>({id:i+1,value})),result:firstMissing(answers)===-1?score(answers):null})},
 {name:'answer_ei_questions',description:'Record explicitly supplied user answers, from -3 to 3. Does not submit results.',inputSchema:{type:'object',properties:{answers:{type:'array',minItems:1,items:{type:'object',properties:{id:{type:'integer',minimum:1,maximum:60},value:{type:'integer',minimum:-3,maximum:3}},required:['id','value'],additionalProperties:false}}},required:['answers'],additionalProperties:false},annotations:{readOnlyHint:false},execute:input=>{if(busy)throw new Error('请等待结果显示');const entries=input?.answers;if(!Array.isArray(entries)||!entries.length||entries.some(a=>!Number.isInteger(a.id)||a.id<1||a.id>60||!values.includes(a.value))||new Set(entries.map(a=>a.id)).size!==entries.length)throw new Error('Invalid answers');entries.forEach(a=>answers[a.id-1]=a.value);showPage(Math.floor((entries.at(-1).id-1)/PAGE_SIZE));return{completed:answers.filter(a=>values.includes(a)).length};}},
 {name:'complete_ei_test',description:'Calculate and display results only after all 60 questions are answered.',inputSchema:empty,annotations:{readOnlyHint:false},execute:()=>{score(answers);return submitResults();}}
 ];for(const tool of tools){try{Promise.resolve(document.modelContext.registerTool(tool,{signal:lifecycle.signal})).catch(()=>{});}catch{}}
}
