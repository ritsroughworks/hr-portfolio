import React from 'react';

export function AboutSection({ education = 'MBA (HR Specialization); BSc Physics', experience = '20+ years', qualities = ['Certified Scrum Master', 'Strategic HR', 'L&D Design', 'Talent Acquisition', 'Change Management'], techs = ['LMS & Microlearning', 'People Analytics', 'HRIS', 'Gen AI / Prompt Engineering'] }){
const cards = [
{ title: 'Education', body: education },
{ title: 'Experience', body: experience },
{ title: 'Key Qualities & Achievements', body: qualities.join(', ') },
{ title: 'Technologies & Trends Implemented', body: techs.join(', ') },
];


return (
<section className="max-w-[1200px] mx-auto px-4 py-10" id="about">
<h2 className="text-2xl font-semibold mb-6">About Mr.Barani</h2>
<div className="grid grid-cols-1 md:grid-cols-4 gap-4">
{cards.map((c) => (
<article key={c.title} className="rounded-xl shadow-sm p-4 bg-white">
<h3 className="font-semibold mb-2">{c.title}</h3>
<p className="text-sm text-slate-600">{c.body}</p>
</article>
))}
</div>
</section>
);
}

export default AboutSection;