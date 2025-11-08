// src/components/ExperienceSection.jsx
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

function LogoItem({ src, alt }) {
  const [imgError, setImgError] = useState(false);
  return (
    <div className="flex items-center justify-center px-2 py-3">
      {!imgError ? (
        <img
          src={src}
          alt={alt || ''}
          className="h-12 md:h-20 object-contain"
          onError={() => setImgError(true)}
          loading="lazy"
        />
      ) : (
        <div className="w-28 h-12 md:h-20 flex items-center justify-center bg-slate-50 rounded">
          <svg viewBox="0 0 24 24" className="w-6 h-6 text-slate-400" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
            <rect x="2" y="4" width="20" height="16" rx="2" stroke="currentColor" strokeWidth="1.5" />
            <path d="M7 9h10M7 13h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      )}
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
    { src: '/assets/logo-themesoft.png', alt: 'Themesoft India Limited' },
    { src: '/assets/logo-softcrylic.png', alt: 'Softcrylic Technologies Ltd' },
    { src: '/assets/logo-informatics.png', alt: 'Informatics Technologies Inc' },
    { src: '/assets/logo-teksystems.svg', alt: 'TEK Systems' },
    { src: '/assets/logo-hcl.png', alt: 'HCL America' },
    { src: '/assets/logo-macmillan.jpg', alt: 'Macmillan' },
    { src: '/assets/logo-etsy.png', alt: 'ETSY' },
    { src: '/assets/logo-delta.svg', alt: 'Delta Air' },
    { src: '/assets/logo-toyota.svg', alt: 'Toyota' },
    { src: '/assets/logo-mercedes.png', alt: 'Mercedes Benz' },
    { src: '/assets/logo-carlson.png', alt: 'Carlson Rezidor (Radisson, Park Plaza)' },
    { src: '/assets/logo-cognizant.png', alt: 'Cognizant' },
    { src: '/assets/logo-dowjones.svg', alt: 'Dow Jones' },
    { src: '/assets/logo-att.svg', alt: 'AT&T' },
    { src: '/assets/logo-avaya.png', alt: 'Avaya' },
    { src: '/assets/logo-pepsico.svg', alt: 'PepsiCo' },
    { src: '/assets/logo-shell.png', alt: 'Shell Lubricants' },
    { src: '/assets/logo-target.svg', alt: 'Target Corp' },
  ];

  const logos = clients.length ? clients.slice(0, 20) : defaultClients;
  // create columns of 2 items each for mobile scroll view
  const columns = [];
  for (let i = 0; i < logos.length; i += 2) {
    columns.push([logos[i], logos[i + 1]]);
  }

  // topic cards content
  const topics = [
    {
      emoji: '🎯',
      title: 'Talent Strategy',
      body:
        'A good talent strategy ensures every new hire fits the company goals and culture. Adopted AI driven Analytics. Foster Continuous learning and Upskilling program. Promoted flexible, hybrid, diversity, equality and inclusion.'
    },
    {
      emoji: '🏗️',
      title: 'Organization Design',
      body:
        'Designing the right structures helps teams perform with less confusion and overlap. Agility over Rigidity. Talent as the Unit of value. Purpose-Driven Structure. Tech-Enabled, Human-Centric. Boundaryless Collaboration. SOP Design & Implementation.'
    },
    {
      emoji: '🔁',
      title: 'Change Management',
      body:
        'Smooth transitions by preparing teams, clear communication, and maintaining morale. Vision and Sponsorship. Talent Enablement. Agile Execution. Behavioural data. Sustained Adoption'
    },
    {
      emoji: '⚙️',
      title: 'HR Tech Implementation',
      body:
        'Moving from manual to data-driven systems for better accuracy and insights. Efficiency Gains. Data-Driven Insights. Employee Experience Boost. DEI & Compliance. Security & Scalability.'
    },
  ];

  return (
    <section className="max-w-[1200px] mx-auto px-4 py-10" id="experience">
      <h2 className="text-2xl font-semibold mb-6">Experience & Outcome</h2>

      {/* Pagination styling + ensure swiper slides are flex columns and auto height (override Swiper inline) */}
      <style>{`
        .experience-swiper .swiper-pagination {
          position: static !important;
          margin-top: 0.75rem;
          display: flex;
          justify-content: center;
          gap: 0.5rem;
        }
        .experience-swiper .swiper-pagination-bullet {
          width: 10px;
          height: 10px;
          opacity: 0.6;
          background: #cbd5e1;
        }
        .experience-swiper .swiper-pagination-bullet-active {
          background: #0ea5a4;
          opacity: 1;
        }
        .experience-swiper .swiper-button-prev,
        .experience-swiper .swiper-button-next {
          display: none !important;
        }

        /* IMPORTANT: ensure slides are flex columns and auto height (override Swiper inline styles) */
        .experience-swiper .swiper-slide {
          display: flex !important;
          flex-direction: column !important;
          height: auto !important;
        }
      `}</style>

      {/* MOBILE: Swiper with pagination (visible on small screens) */}
      <div className="md:hidden mb-6">
        <div className="experience-swiper">
          <Swiper
            modules={[Pagination]}
            slidesPerView={1.05}
            spaceBetween={12}
            pagination={{ clickable: true }}
            aria-label="Experience topics"
            className="py-2"
          >
            {topics.map((t) => (
              <SwiperSlide
                key={t.title}
                className="rounded-xl p-4 shadow-md bg-white flex flex-col h-full"
              >
                {/* card-content stretches to equalize heights */}
                <div className="card-content flex-1">
                  <div className="flex items-start gap-4">
                    <div
                      className="flex-shrink-0 w-10 h-10 rounded-full bg-teal-50 flex items-center justify-center text-xl"
                      aria-hidden
                    >
                      <span className="select-none">{t.emoji}</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">{t.title}</h3>

                      {/* split sentences and render each on its own line */}
                      <div className="text-sm text-slate-600 mt-2 space-y-1">
                        {t.body.split('. ').map((line, idx) =>
                          line.trim() ? <p key={idx}>• {line.trim().replace(/\.$/, '')}.</p> : null
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* DESKTOP: 2x2 topics grid (md+) */}
      <div className="hidden md:grid md:grid-cols-2 md:grid-rows-2 gap-4 mb-8">
        {topics.map((t) => (
          <article key={t.title} className="rounded-xl p-6 shadow-sm bg-white flex items-start gap-4">
            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-teal-50 flex items-center justify-center text-2xl select-none">
              {t.emoji}
            </div>
            <div>
              <h4 className="font-semibold text-lg">{t.title}</h4>
              <div className="text-sm text-slate-600 mt-2 space-y-1">
                {t.body.split('. ').map((line, idx) =>
                  line.trim() ? <p key={idx}>• {line.trim().replace(/\.$/, '')}.</p> : null
                )}
              </div>
            </div>
          </article>
        ))}
      </div>

      <h2 className="text-2xl font-semibold mb-6">Clients Served</h2>

      {/* DESKTOP: 4 rows x 5 columns grid for logos */}
      <div className="hidden md:grid md:grid-rows-4 md:grid-cols-5 gap-4 mb-6">
        {logos.map((c, i) => (
          <div key={i} className="flex items-center justify-center bg-white rounded-md p-4 shadow-sm">
            <LogoItem src={c.src} alt={c.alt} />
          </div>
        ))}
      </div>

      {/* MOBILE: 2-row horizontal scrollable logos (columns of 2 logos) */}
      <div
        className="md:hidden overflow-x-auto -mx-4 px-4"
        style={{ WebkitOverflowScrolling: 'touch' }}
        aria-label="Client logos, swipe to view"
      >
        <div className="flex gap-4 items-start">
          {columns.map((col, idx) => (
            <div key={idx} className="min-w-[140px] flex flex-col items-center justify-center bg-white rounded-md p-2 shadow-sm">
              {col[0] ? <LogoItem src={col[0].src} alt={col[0].alt} /> : <div className="h-12" />}
              {col[1] ? <LogoItem src={col[1].src} alt={col[1].alt} /> : <div className="h-12" />}
            </div>
          ))}
        </div>
      </div>

      <p className="text-xs text-slate-500 mt-4">Swipe on mobile 👉 — view the full grid on desktop.</p>

      {/* Optional: Project types grid below (kept if you want to show them) */}
      {/* <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-6">
        {projectTypes.map((p) => (
          <article key={p} className="rounded-xl p-4 shadow-sm bg-white">
            <h4 className="font-semibold">{p}</h4>
            <p className="text-sm text-slate-600 mt-2">Short example or description for {p}.</p>
          </article>
        ))}
      </div> */}
    </section>
  );
}

export default ExperienceSection;
