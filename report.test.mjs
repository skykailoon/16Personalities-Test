import assert from 'node:assert/strict';
import {score} from './questions.js';
import {getCombinedResult,unresolvedAxes} from './result-content.js';
import {createReport,deliverReport} from './report-email.js';
const r=score(Array(60).fill(0));
assert.deepEqual(unresolvedAxes(r),['ei','ns','tf','jp']);
assert.equal(unresolvedAxes(r,{ei:''}).length,4);
for(const e of 'EI')for(const n of 'NS')for(const t of 'TF')for(const j of 'JP'){
 const choices={ei:e,ns:n,tf:t,jp:j};const c=getCombinedResult(r,choices);
 assert.equal(c.code,e+n+t+j);assert.equal(c.types.length,1);assert.equal(unresolvedAxes(r,choices).length,0);assert.equal(r.n,50);
 const payload=createReport(r,c.code,{confirmedAxes:c.confirmedAxes,id:'test-id',time:new Date('2026-11-26T00:00:00Z'),test:true});assert.equal(payload['人格倾向'],c.code);assert(!('answers' in payload));assert(!JSON.stringify(payload).includes('skykailoon@gmail.com'));assert(payload['信息偏好'].includes('50.0%'));
}
assert.throws(()=>createReport(r,'IXTP'));assert.throws(()=>createReport(r,'INTP / ISTP'));
const report=createReport(r,'INTP');
assert.equal(await deliverReport(report,async()=>({ok:true,json:async()=>({success:true,message:'Success'})})),'accepted');
assert.equal(await deliverReport(report,async()=>({ok:true,json:async()=>({success:'true',message:'Check your inbox to activate'})})),'activation');
await assert.rejects(deliverReport(report,async()=>({ok:false})));
await assert.rejects(deliverReport(report,async()=>({ok:true,json:async()=>({success:false})})));
console.log('PASS: all 16 single results resolved explicitly, percentages unchanged, one-type email payload, private summary only, acceptance/activation/failure paths.');
