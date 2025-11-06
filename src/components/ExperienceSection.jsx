// src/components/ExperienceSection.jsx
import React, { useState } from 'react';

function LogoItem({ src, alt }) {
  const [imgError, setImgError] = useState(false);

  return (
    <div
      className="flex flex-col items-center justify-center min-w-[120px] md:min-w-0 p-3 bg-white rounded-md shadow-sm filter grayscale hover:grayscale-0 transition"
      title={alt || ''}
    >
      {/* Show image if it loads; otherwise show a graphical fallback (no visible alt text) */}
      {!imgError ? (
        <img
          src={src}
          alt={alt || ''} // keep alt for accessibility; empty alt is allowed for purely decorative images
          className="max-h-10 object-contain"
          onError={() => setImgError(true)}
          // if you prefer to hide broken images (and show fallback), use the state above
        />
      ) : (
        // Fallback: small neutral graphic (monogram or shell) – keeps layout consistent
        <div className="w-12 h-10 flex items-center justify-center bg-slate-50 rounded">
          {/* Simple generic placeholder SVG (scales nicely and looks neutral) */}
          <svg viewBox="0 0 24 24" className="w-8 h-8 text-slate-400" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <rect x="2" y="4" width="20" height="16" rx="2" stroke="currentColor" strokeWidth="1.5" />
            <path d="M7 9h10M7 13h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      )}

      {/* Hidden label for screen readers only — not visible on screen */}
      <span className="sr-only">{alt}</span>
    </div>
  );
}

export function ExperienceSection({
  clients = [],
  projectTypes = ['Talent Strategy', 'Org Design', 'Change Management', 'HR Tech Implementation']
}) {
  const defaultClients = [
    { src: '/assets/logo-havells.svg', alt: 'Havells India Ltd' },
    { src: '/assets/logo-erpmark.png', alt: 'ERP Mark Inc' },
    { src: '/assets/logo-themesoft.jpg', alt: 'Themesoft India Limited' },
    { src: '/assets/logo-softcrylic.png', alt: 'Softcrylic Technologies Ltd' },
    { src: '/assets/logo-informatics.jpg', alt: 'Informatics Technologies Inc' },
    { src: '/assets/logo-teksystems.svg', alt: 'TEK Systems' },
    { src: '/assets/logo-hcl.png', alt: 'HCL America' },
    { src: '/assets/logo-macmillan.jpg', alt: 'Macmillan' },
    { src: '/assets/logo-etsy.svg', alt: 'ETSY' },
    { src: '/assets/logo-delta.svg', alt: 'Delta Air' },
    { src: '/assets/logo-toyota.svg', alt: 'Toyota' },
    { src: '/assets/logo-mercedes.png', alt: 'Mercedes Benz' },
    { src: '/assets/logo-carlson.png', alt: 'Carlson Rezidor (Radisson, Park Plaza)' },
    { src: '/assets/logo-cognizant.png', alt: 'Cognizant' },
    { src: '/assets/logo-dowjones.svg', alt: 'Dow Jones' },
    { src: '/assets/logo-att.svg', alt: 'AT&T' },
    { src: '/assets/logo-avaya.jpg', alt: 'Avaya' },
    { src: '/assets/logo-pepsico.svg', alt: 'PepsiCo' },
    { src: '/assets/logo-shell.svg', alt: 'Shell Lubricants' },
    { src: '/assets/logo-target.svg', alt: 'Target Corp' },
    { src: '/assets/logo-bluecross.svg', alt: 'BlueCross BlueShield' },
    { src: '/assets/logo-capitalone.svg', alt: 'Capital One' },
    { src: '/assets/logo-chase.svg', alt: 'Chase Bank' },
    { src: '/assets/logo-prudential.svg', alt: 'Prudential' },
    { src: '/assets/logo-goldmansachs.svg', alt: 'Goldman Sachs' },
  ];

  const logos = clients.length ? clients : defaultClients;

  return (
    <section className="max-w-[1200px] mx-auto px-4 py-10" id="experience">
      <h2 className="text-2xl font-semibold mb-4">Experience & Clients</h2>

      <div className="mb-6">
        <div className="flex gap-4 overflow-x-auto md:grid md:grid-cols-5 md:gap-6">
          {logos.map((c, i) => (
            <LogoItem key={i} src={c.src} alt={c.alt || ''} />
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {projectTypes.map((p) => (
          <article key={p} className="rounded-xl p-4 shadow-sm bg-white">
            <h4 className="font-semibold">{p}</h4>
            <p className="text-sm text-slate-600 mt-2">Short example or description for {p}.</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default ExperienceSection;
