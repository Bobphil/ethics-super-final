import fs from "node:fs";

const m=JSON.parse(fs.readFileSync(new URL("./ETHICS-PB-URL-BIND-1_MANIFEST.json",import.meta.url),"utf8"));
const out={checks:[],pass:true};
function check(name,ok){out.checks.push({name,pass:!!ok});if(!ok)out.pass=false}
check("build id",m.build_id==="ETHICS-PB-URL-BIND-1");
check("12 chapters",m.chapters.length===12);
check("12 verified chapter URLs",m.chapters.every(c=>!!c.pressbooks.verified_chapter_url));
check("unique chapter URLs",new Set(m.chapters.map(c=>c.pressbooks.verified_chapter_url)).size===12);
check("workbook deep links",m.chapters.every(c=>c.workbook.url.includes("#chapter="+c.id+"&view=workbook")));
check("45 targeted readings",m.chapters.reduce((n,c)=>n+c.targeted_readings.length,0)===45);
check("all targets have heading labels",m.chapters.every(c=>c.targeted_readings.every(r=>!!r.heading)));
check("all targets use verified chapter route",m.chapters.every(c=>c.targeted_readings.every(r=>r.verified_url===c.pressbooks.verified_chapter_url)));
check("all targets use chapter+label mode",m.chapters.every(c=>c.targeted_readings.every(r=>r.navigation_mode==="CHAPTER_URL_PLUS_SECTION_LABEL")));
check("anchors optional and not falsely claimed",m.chapters.every(c=>c.targeted_readings.every(r=>r.verified_anchor===null)));
check("12 return URLs verified",m.chapters.every(c=>c.return_to_chapter.verified_url===c.pressbooks.verified_chapter_url));
check("no Canvas URLs",!/instructure\.com|canvas\./i.test(JSON.stringify(m)));
check("CH12 PFLAB gate",!!m.chapters.find(c=>c.id==="CH12").pflab_gate);
check("Transition A separate",!!m.transition_a && !m.chapters.some(c=>/Transition A/.test(c.title)));
check("anchor policy frozen",m.pressbooks.section_anchor_policy?.status==="ANCHORS_NOT_REQUIRED");
out.capture={
  verified_chapters:m.chapters.filter(c=>!!c.pressbooks.verified_chapter_url).length,
  total_chapters:12,
  verified_targeted_readings:m.chapters.reduce((n,c)=>n+c.targeted_readings.filter(r=>r.status==="VERIFIED_CHAPTER_ROUTE_SECTION_LABEL").length,0),
  total_targeted_readings:45
};
console.log(JSON.stringify(out,null,2));
if(!out.pass) process.exit(1);
