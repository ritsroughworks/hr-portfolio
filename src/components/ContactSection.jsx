import React from 'react';

export function ContactSection({ linkedInUrl = 'https://www.linkedin.com/in/barani25', email = 'personb@example.com' }){
return (
<footer className="max-w-[1200px] mx-auto px-4 py-10 text-center" id="contact">
<h2 className="text-2xl font-semibold mb-4">Let’s Connect!</h2>
<div className="flex justify-center gap-3">
<a href={linkedInUrl} className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl border" aria-label="LinkedIn">
LinkedIn
</a>
<a href={`mailto:${email}`} className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl border" aria-label="Email">
Email
</a>
</div>


<div className="mt-6 text-sm text-slate-500">© {new Date().getFullYear()} M.Barani – All Rights Reserved.</div>
</footer>
);
}

export default ContactSection;