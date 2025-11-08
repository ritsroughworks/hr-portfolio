// src/components/HeroSection.jsx
import React from 'react';

export function HeroSection({
  name = 'Barani HR Firm',
  title = 'Demand Generation • HR Consulting • L&D',
  linkedInUrl = 'https://www.linkedin.com/in/barani25',
  photoSrc = '/assets/pfp.jpg'
}) {
  return (
    <section className="max-w-[1200px] mx-auto px-4 py-10" aria-labelledby="hero-heading">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
        <div>
          <h1 id="hero-heading" className="text-3xl md:text-4xl font-bold leading-tight">
            {name}
          </h1>

          <p className="text-teal-700 mt-2 font-semibold">{title}</p>

          {/* Strong quote */}
          <blockquote className="mt-4 border-l-4 border-teal-200 pl-4 italic text-slate-700 bg-teal-50/40 rounded-md p-3">
            <span className="font-semibold">“Straight from the Source: Wisdom in the AI Age”</span>
            <div className="mt-2 text-sm">
              In an age of AI assistance, deep domain experience still matters — 
              our expertise turns data and tools into practical, human-centred HR outcomes.
            </div>
          </blockquote>

          {/* Tailored pitch */}
          <p className="mt-4 text-sm md:text-base text-slate-700">
            In an era where algorithms whisper predictions and data streams weave narratives, 
            the timeless virtue endures: seek the unvarnished truth *straight from the horse's mouth. 
            Here, we bypass the filters, the echoes, and the interpretations—delivering raw insights, 
            expert voices, and firsthand revelations that cut through the digital din. Explore, uncover, 
            and connect with the essence of knowledge, unadorned and authentic.
          </p>

          <div className="mt-6 flex items-center gap-3">
            <a
              href={linkedInUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-slate-200 bg-white hover:bg-[#0077B5]/10 focus:outline-none focus:ring-2 focus:ring-[#0077B5]"
            >
              {/* Official LinkedIn SVG */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                className="w-5 h-5 fill-[#0077B5]"
                aria-hidden="true"
                focusable="false"
              >
                <path d="M100.28 448H7.4V149.5h92.88zm-46.44-339a53.79 53.79 0 1 1 53.79-53.79 53.79 53.79 0 0 1-53.79 53.79zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.3 0-55.7 37.7-55.7 76.6V448h-92.7V149.5h89V196h1.3c12.4-23.5 42.6-48.3 87.8-48.3 93.9 0 111.2 61.8 111.2 142.3V448z" />
              </svg>
              <span className="text-sm font-medium text-[#0077B5]">LinkedIn</span>
            </a>

            <a
              href="mailto:baranitalks@gmail.com"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-slate-200 bg-white hover:bg-teal-50 focus:outline-none focus:ring-2 focus:ring-teal-300 text-sm"
            >
              Contact
            </a>
          </div>
        </div>

        <div className="flex justify-center md:justify-end">
          <img
            src={photoSrc}
            alt={`${name} profile`}
            className="w-40 h-40 md:w-56 md:h-56 object-cover rounded-full shadow-md"
          />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
