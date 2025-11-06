// src/main.jsx
import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

// Simple named imports — components should export their own content / defaults
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { SkillsCarousel } from './components/SkillsCarousel';
import { ExperienceSection } from './components/ExperienceSection';
import { CertificationsSection } from './components/CertificationsSection';
import { AchievementsCarousel } from './components/AchievementsCarousel';
import { ContactSection } from './components/ContactSection';


function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Navbar brand="M.Barani" />

      <main>
        <HeroSection />

        <AboutSection />

        <SkillsCarousel />

        <ExperienceSection />

        <CertificationsSection />

        <AchievementsCarousel />

        <ContactSection />
      </main>

      <footer className="mt-12 border-t bg-white">
        <div className="max-w-[1200px] mx-auto px-4 py-4 text-sm text-slate-500">
          Built with React + Vite + Tailwind CSS (v3) • © {new Date().getFullYear()} M.Barani
        </div>
      </footer>
    </div>
  );
}

const rootEl = document.getElementById('root');
if (!rootEl) {
  console.error('Root element not found: make sure your index.html has <div id="root"></div>');
} else {
  createRoot(rootEl).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}
