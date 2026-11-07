import fs from "node:fs";

const m=JSON.parse(fs.readFileSync(new URL("./ETHICS-PB-URL-BIND-1_MANIFEST.json",import.meta.url),"utf8"));
const out={checks:[],pass:true};
function check(name,ok){out.checks.push({name,pass:!!ok});if(!ok)out.pass=false}
check("build id",m.build_id==="ETHICS-PB-URL-BIND-1");
check("12 chapters",m.chapters.length===12);
check("unique chapter ids",new Set(m.chapters.map(c=>c.id)).size===12);
check("ordered ids",m.chapters.every((c,i)=>c.id===("CH"+String(i+1).padStart(2,"0"))));
check("workbook deep links",m.chapters.every(c=>c.workbook.url.includes("#chapter="+c.id+"&view=workbook")));
check("3+ targeted readings each",m.chapters.every(c=>c.targeted_readings.length>=3));
check("no active unverified targeted links",m.chapters.every(c=>c.targeted_readings.every(r=>r.status!=="ACTIVE" || !!r.verified_url)));
check("no active unverified chapter return",m.chapters.every(c=>c.return_to_chapter.status!=="ACTIVE" || !!c.return_to_chapter.verified_url));
check("candidate and verified kept distinct",m.chapters.every(c=>("candidate_chapter_url" in c.pressbooks)&&("verified_chapter_url" in c.pressbooks)));
check("no Canvas URLs",!/instructure\.com|canvas\./i.test(JSON.stringify(m)));
check("quiz logical ids",m.chapters.every(c=>c.quiz_id==="QZ-"+c.id));
check("journal logical ids",m.chapters.every(c=>c.journal_id==="JRN-"+c.id));
check("CH12 PFLAB gate",!!m.chapters.find(c=>c.id==="CH12").pflab_gate);
check("Transition A separate",!!m.transition_a && !m.chapters.some(c=>/Transition A/.test(c.title)));
check("private-book block explicit",m.pressbooks.live_verification_state==="BLOCKED_BY_PRIVATE_BOOK");
const verifiedChapters=m.chapters.filter(c=>!!c.pressbooks.verified_chapter_url).length;
const verifiedSections=m.chapters.reduce((n,c)=>n+c.targeted_readings.filter(r=>!!r.verified_url).length,0);
out.capture={verified_chapters:verifiedChapters,total_chapters:12,verified_sections:verifiedSections,total_sections:m.chapters.reduce((n,c)=>n+c.targeted_readings.length,0)};
console.log(JSON.stringify(out,null,2));
if(!out.pass) process.exit(1);
