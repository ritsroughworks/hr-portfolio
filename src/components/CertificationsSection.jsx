import React from 'react';

export function CertificationsSection({ cert = { title: 'Certified Scrum Master (CSM)', issuer: 'Scrum Alliance', badge: '/assets/csm-badge.svg' } }){
return (
<section className="max-w-[1200px] mx-auto px-4 py-10 text-center" id="certifications">
<h2 className="text-2xl font-semibold mb-4">Certifications</h2>
<div className="inline-block bg-white rounded-xl shadow-md p-6">
<img src={cert.badge} alt={`${cert.title} badge`} className="w-20 h-20 mx-auto mb-4" />
<h3 className="font-semibold">{cert.title}</h3>
<p className="text-sm text-slate-600">Issued by {cert.issuer}</p>
</div>
</section>
);
}

export default CertificationsSection;