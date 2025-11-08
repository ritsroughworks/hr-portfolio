// src/components/SkillsCarousel.jsx
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

export function SkillsCarousel() {
  const slides = [
    { emoji: '🧭', title: 'Overview', bullets: ['Talent Acquisition', 'Employee Experience', 'HR Strategy', 'Learning & Development', 'Digital Transformation', 'Agile HR'] },
    { emoji: '🎯', title: 'Recruitment', bullets: ['Global Recruitment Setups', 'Sourcing Strategy', 'Interview Design', 'Offer Management'] },
    { emoji: '📚', title: 'Learning & Development', bullets: ['LMS Implementation', 'Microlearning', 'Instructional Design', 'Competency-based Assessments'] },
    { emoji: '⚙️', title: 'People Operations', bullets: ['HR Audits', 'Process Optimization', 'HRIS', 'Payroll & Compliance'] },
    { emoji: '💡', title: 'Performance & Culture', bullets: ['OKRs', 'Performance Frameworks', 'Engagement & DEI', 'Change Management'] },
    { emoji: '🤖', title: 'Modern Tech', bullets: ['People Analytics', 'Gen AI Tools', 'Prompt Engineering', 'HR Automation'] },

    {
      emoji: '🏢',
      title: 'Co-working Space (Coimbatore)',
      bullets: [
        'Fully equipped and integrated co-working space in Coimbatore',
        'Can accommodate up to 100 people comfortably',
        'Ideal for startups, remote teams, and project-based work',
        'Flexible plans available based on team size and duration',
      ],
    },
    {
      emoji: '🚚',
      title: 'New Office Implementation (Tamil Nadu)',
      bullets: [
        'Complete assistance for setting up new office spaces across Tamil Nadu',
        // 'Support for companies expanding from Kerala, Karnataka, and other regions',
        'Includes site coordination, infrastructure, and setup management',
        'Customizable solutions to match client needs and timelines',
      ],
    },
    {
      emoji: '🧑‍💼',
      title: 'Outsourcing HRBP',
      bullets: [
        'User-based HR Business Partnering for small, medium and large enterprises',
        'End-to-end HR support tailored to organization scale and structure',
        'Monthly, hourly and fully customized billing options available',
      ],
    },
    {
      emoji: '📈',
      title: 'Methodologies Implementation',
      bullets: [
        'Agile methodology',
        'Kanban workflow system',
        'Kaizen continuous improvement approach',
        'ADKAR change management framework',
        'Pareto analysis (80/20 rule)',
        'Fishbone cause analysis',
        'NLP (Neuro-Linguistic Programming)',
      ],
    },


  ];

  return (
    <section className="max-w-[1200px] mx-auto px-4 py-10" id="skills">
      <h2 className="text-2xl font-semibold mb-6">Expertise and Services Provided</h2>

      {/* Scoped CSS: move pagination below and hide arrows */}
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
              <SwiperSlide key={s.title} className="rounded-xl p-4 shadow-md bg-white">
                <div className="flex items-start gap-3 mb-2">
                  <div
                    className="flex-shrink-0 w-10 h-10 rounded-full bg-teal-50 flex items-center justify-center text-xl"
                    aria-hidden="true"
                  >
                    <span className="select-none">{s.emoji}</span>
                  </div>
                  <h3 className="font-semibold text-lg leading-tight">{s.title}</h3>
                </div>

                <ul className="text-sm text-slate-600 space-y-1">
                  {s.bullets.map((b) => (
                    <li key={b}>• {b}</li>
                  ))}
                </ul>
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
        Swipe on mobile — view the full grid on desktop.
      </p>
    </section>
  );
}

export default SkillsCarousel;
