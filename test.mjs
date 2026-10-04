import assert from 'node:assert/strict';
import {questions,AXES,score,pageQuestions,firstMissing,PAGE_COUNT} from './questions.js';
import {getCombinedResult} from './result-content.js';
assert.equal(questions.length,60);assert.equal(PAGE_COUNT,10);
assert.equal(new Set(questions.map(q=>q.original)).size,60);
for(let p=0;p<10;p++){assert.equal(pageQuestions(p).length,6);pageQuestions(p).forEach((q,i)=>{assert.equal(q.id,p*6+i+1);assert.equal(q.source,`截图 ${p+1} · 第 ${i+1} 题`);});}
for(const axis of AXES){assert.equal(questions.filter(q=>q.primaryAxis===axis).length,12);for(const sign of [-1,1]){const r=score(questions.map(q=>Math.sign(q.weights[axis])*3*sign));assert.equal(r.axes[axis].positive,sign===1?100:0);}}
assert.throws(()=>score(Array(60).fill(null)));assert.throws(()=>score(Array(60)));assert.throws(()=>score(Array(59).fill(0)));assert.throws(()=>score(Array(60).fill(4)));
const neutral=Array(60).fill(0);const r=score(neutral);assert.equal(getCombinedResult(r).code,'XXXX');assert.equal(getCombinedResult(r).types.length,16);
const changed=[...neutral];changed[56]=3;const result=score(changed);assert(result.n>50);assert(result.p>50);assert.equal(result.e,50);assert.equal(result.t,50);
const social=[...neutral];social[40]=3;assert(score(social).i>50);assert(score(social).axes.stress.negative>50);
for(let n=0;n<300;n++){const a=questions.map(()=>Math.floor(Math.random()*7)-3),b=a.map(v=>-v),x=score(a),y=score(b);for(const axis of AXES){assert(Math.abs(x.axes[axis].positive+y.axes[axis].positive-100)<.001);assert.equal(Math.round((x.axes[axis].positive+x.axes[axis].negative)*10),1000);}assert(getCombinedResult(x).types.every(t=>[x.e,x.n,x.t,x.j].every((v,i)=>v===50||t[i]===(v>50?'ENTJ':'ISFP')[i])));}
const partial=Array(60).fill(null);partial.fill(0,0,6);assert.equal(firstMissing(partial,0),-1);assert.equal(firstMissing(partial,1),6);assert.equal(firstMissing(partial),6);
console.log('PASS: 60 sources, 10 pages, five independent scores, cross-loadings, extremes, missing answers, ties, complements and type filtering.');
