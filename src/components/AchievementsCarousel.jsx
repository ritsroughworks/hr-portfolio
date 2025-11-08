// src/components/AchievementsCarousel.jsx
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

export function AchievementsCarousel() {
  const cards = [
    { emoji: '⚡️', title: 'Reduced Time-to-Hire', desc: 'Cut average hiring time by 30% in 6 months through structured sourcing.' },
    { emoji: '🤝', title: 'Improved Retention', desc: 'Implemented retention programs that reduced churn by 12%.' },
    { emoji: '🔧', title: 'Scaled HR Tech', desc: 'Led HRIS rollout across 2,000 employees.' },
    { emoji: '📈', title: 'Learning ROI', desc: 'Built L&D path with measurable performance uplift.' },
  ];

  return (
    <section className="max-w-[1200px] mx-auto px-4 py-10" id="achievements">
      <h2 className="text-2xl font-semibold mb-6">Achievements & Impact</h2>

      {/* Scoped CSS: move pagination below slides and hide arrows if present */}
      <style>{`
        /* scope styles to this component by targeting the wrapper class */
        .achievements-swiper .swiper-pagination {
          position: static !important;
          margin-top: 0.75rem;
          display: flex;
          justify-content: center;
          gap: 0.5rem;
        }
        /* slightly enlarge bullets */
        .achievements-swiper .swiper-pagination-bullet {
          width: 10px;
          height: 10px;
          opacity: 0.6;
          background: #cbd5e1;
        }
        .achievements-swiper .swiper-pagination-bullet-active {
          background: #0ea5a4; /* teal-ish active color */
          opacity: 1;
        }
        /* hide any leftover navigation arrows (defensive) */
        .achievements-swiper .swiper-button-prev,
        .achievements-swiper .swiper-button-next {
          display: none !important;
        }
        /* ensure slides are flex columns and auto height (override Swiper inline) */
        .achievements-swiper .swiper-slide {
          display: flex;
          flex-direction: column;
          height: auto !important;
        }
      `}</style>

      {/* MOBILE: Swiper carousel (visible on small screens only) */}
      <div className="md:hidden">
        <div className="achievements-swiper">
          <Swiper
            modules={[Pagination]}
            slidesPerView={1.05}
            spaceBetween={12}
            pagination={{ clickable: true }}
            aria-label="Achievements carousel"
            className="py-2"
          >
            {cards.map((c) => (
              <SwiperSlide key={c.title} className="rounded-xl p-4 shadow-md bg-white flex flex-col h-full">
                <div className="card-content flex-1">
                  <div className="flex items-start gap-4">
                    <div
                      className="flex-shrink-0 w-10 h-10 rounded-full bg-teal-50 flex items-center justify-center text-xl"
                      aria-hidden="true"
                    >
                      <span className="select-none">{c.emoji}</span>
                    </div>

                    <div>
                      <h4 className="font-semibold text-lg leading-tight">{c.title}</h4>
                      <p className="text-sm text-slate-600 mt-2">{c.desc}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* DESKTOP / TABLET: 2x2 Grid (hidden on small screens) */}
      <div className="hidden md:grid md:grid-cols-2 md:grid-rows-2 md:gap-6">
        {cards.map((c) => (
          <article key={c.title} className="rounded-2xl p-6 shadow-lg bg-white flex items-start gap-4">
            <div
              className="flex-shrink-0 w-12 h-12 rounded-full bg-teal-50 flex items-center justify-center text-2xl"
              aria-hidden="true"
            >
              <span className="select-none">{c.emoji}</span>
            </div>

            <div>
              <h4 className="font-semibold text-lg">{c.title}</h4>
              <p className="text-sm text-slate-600 mt-2">{c.desc}</p>
            </div>
          </article>
        ))}
      </div>

      <p className="text-xs text-slate-500 mt-4">Swipe on mobile 👉 — view the full grid on desktop.</p>
    </section>
  );
}

export default AchievementsCarousel;
