// src/components/SkillsCarousel.jsx
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

export function SkillsCarousel() {
  const slides = [
    { emoji: '🧭', title: 'Overview', bullets: ['Talent Acquisition', 'Employee Experience', 'HR Strategy', 'Learning & Development', 'Digital Transformation', 'Agile HR'] },
    { emoji: '🎯', title: 'Recruitment', bullets: ['Global Recruitment Setups', 'Sourcing Strategy', 'Interview Design', 'Offer Management','Staff Augmentation','Contract Staffing'] },
    { emoji: '📚', title: 'Learning & Development', bullets: ['LMS Implementation', 'Microlearning','Blended Learning/VLIT', 'Instructional Design', 'Competency-based Assessments','Skilled Workshops'] },
    { emoji: '⚙️', title: 'People Operations', bullets: ['HR Audits', 'Process Optimization', 'HRIS', 'Payroll & Compliance','CSR Activities','Out sourced Back Office operations'] },
    { emoji: '💡', title: 'Performance & Culture', bullets: ['OKRs', 'Performance Frameworks', 'Engagement & DEI', 'Change Management'] },
    { emoji: '🤖', title: 'Modern Tech', bullets: ['People Analytics', 'Gen AI Tools', 'Prompt Engineering', 'HR Automation'] },
    { emoji: '🏢', title: 'Co-working Space', bullets: ['Coimbatore-based workspace', 'Capacity for 100 members (Plug and Play)','Rented on Hourly, Monthly and Contract basis', 'Startup & remote team friendly', 'Flexible plans & durations'] },
    { emoji: '🚚', title: 'Office Implementation', bullets: ['Setup across Tamil Nadu', 'Site & infrastructure coordination', 'End-to-end setup management', 'Customizable solutions'] },
    { emoji: '🧑‍💼', title: 'HRBP Outsourcing', bullets: ['User-based HR partnering', 'Scalable HR support', 'End-to-end HR operations', 'Flexible billing models'] },
    { emoji: '📈', title: 'Methodologies', bullets: ['Agile', 'Kanban', 'Kaizen', 'ADKAR for Change Management', 'Pareto Methodology for Analysis', 'Fishbone Methodology for QA', 'NLP for Sales'] },
  ];


  return (
    <section className="max-w-[1200px] mx-auto px-4 py-10" id="skills">
      <h2 className="text-2xl font-semibold mb-6">Expertise and Services Provided</h2>

      {/* Scoped CSS: pagination + ensure swiper slides are flex containers so heights can stretch */}
      <style>{`
        .skills-swiper .swiper-pagination {
          position: static !important;
          margin-top: 0.75rem;
          display: flex;
          justify-content: center;
          gap: 0.5rem;
        }
        .skills-swiper .swiper-pagination-bullet {
          width: 10px;
          height: 10px;
          opacity: 0.6;
          background: #cbd5e1;
        }
        .skills-swiper .swiper-pagination-bullet-active {
          background: #0ea5a4;
          opacity: 1;
        }
        .skills-swiper .swiper-button-prev,
        .skills-swiper .swiper-button-next {
          display: none !important;
        }

        /* Force swiper slides to be flex containers and allow height auto (Swiper sometimes sets inline heights) */
        .skills-swiper .swiper-slide {
          display: flex;
          flex-direction: column;
          height: auto !important;
        }
      `}</style>

      {/* MOBILE: Swiper carousel */}
      <div className="md:hidden">
        <div className="skills-swiper">
          <Swiper
            modules={[Pagination]}
            slidesPerView={1.05}
            spaceBetween={12}
            pagination={{ clickable: true }}
            aria-label="Skills carousel"
            className="py-2"
          >
            {slides.map((s) => (
              // Make each slide a flex column and let the inner 'card-content' flex to fill available height
              <SwiperSlide key={s.title} className="rounded-xl p-4 shadow-md bg-white flex flex-col h-full">
                <div className="flex items-start gap-3 mb-2">
                  <div
                    className="flex-shrink-0 w-10 h-10 rounded-full bg-teal-50 flex items-center justify-center text-xl"
                    aria-hidden="true"
                  >
                    <span className="select-none">{s.emoji}</span>
                  </div>
                  <h3 className="font-semibold text-lg leading-tight">{s.title}</h3>
                </div>

                {/* This wrapper stretches so all slides match height */}
                <div className="card-content flex-1">
                  <ul className="text-sm text-slate-600 space-y-1">
                    {s.bullets.map((b) => (
                      <li key={b}>• {b}</li>
                    ))}
                  </ul>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* DESKTOP / TABLET: 2 rows x 5 columns grid */}
      <div className="hidden md:grid md:grid-cols-5 md:grid-rows-2 gap-6">
        {slides.map((s) => (
          <article
            key={s.title}
            className="rounded-2xl p-6 shadow-lg bg-white flex flex-col items-start"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-12 h-12 rounded-full bg-teal-50 flex items-center justify-center text-2xl">
                <span className="select-none">{s.emoji}</span>
              </div>
              <h3 className="font-semibold text-lg">{s.title}</h3>
            </div>

            <ul className="text-sm text-slate-600 space-y-1">
              {s.bullets.map((b) => (
                <li key={b}>• {b}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>

      <p className="text-xs text-slate-500 mt-4">
        Swipe on mobile 👉 — view the full grid on desktop.
      </p>
    </section>
  );
}

export default SkillsCarousel;
