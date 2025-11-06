// src/components/Navbar.jsx
import React, { useState, useRef, useEffect } from 'react';

export function Navbar({ brand = 'M.Barani' }) {
  const [open, setOpen] = useState(false);
  const triggerRef = useRef(null);
  const closeBtnRef = useRef(null);

  // manage focus return
  useEffect(() => {
    if (!open && triggerRef.current) triggerRef.current.focus();
    if (open && closeBtnRef.current) closeBtnRef.current.focus();
  }, [open]);

  const links = [
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#experience', label: 'Experience' },
    { href: '#certifications', label: 'Certifications' },
    { href: '#achievements', label: 'Achievements' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <>
      {/* Desktop / Tablet: fixed top-right pill */}
      <div className="hidden md:flex fixed top-4 right-6 z-40 items-center gap-3">
        <div className="rounded-full bg-white/80 backdrop-blur-sm border shadow-sm px-3 py-2 flex items-center gap-3 hover:shadow-md transition">
          <div className="font-medium">{brand}</div>

          <nav className="hidden lg:flex items-center gap-2">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm px-3 py-1 rounded-md hover:bg-slate-100"
              >
                {l.label}
              </a>
            ))}
          </nav>

          {/* compact button (tablet only) */}
          <div className="md:block lg:hidden">
            <button
              className="p-2 rounded-md hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-teal-300"
              onClick={() => setOpen(true)}
              aria-label="Open navigation menu"
            >
              <svg
                className="w-5 h-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  d="M3 6h18M3 12h18M3 18h18"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile: floating bottom-right hamburger */}
      <div className="md:hidden fixed bottom-6 right-6 z-50">
        {!open && (
          <button
            ref={triggerRef}
            onClick={() => setOpen(true)}
            aria-haspopup="dialog"
            aria-expanded={open}
            aria-label="Open navigation menu"
            className="w-14 h-14 rounded-full bg-white shadow-lg flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-teal-300"
          >
            <svg
              className="w-6 h-6"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                d="M3 6h18M3 12h18M3 18h18"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
          </button>
        )}
      </div>

      {/* Slide-over menu */}
      {open && (
        <>
          {/* Dim background */}
          <div
            className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm"
            onClick={() => setOpen(false)}
            aria-hidden="true"
          />

          <aside
            role="dialog"
            aria-modal="true"
            className="fixed inset-y-0 right-0 z-50 w-full max-w-[420px] md:max-w-[360px] bg-white shadow-2xl p-6 overflow-auto"
          >
            <div className="flex items-center justify-between">
              <div className="text-lg font-semibold">{brand}</div>
              {/* top close button (optional, still accessible) */}
            </div>

            <nav className="mt-6 space-y-4">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block text-lg font-medium p-3 rounded-md hover:bg-slate-50"
                >
                  {l.label}
                </a>
              ))}
            </nav>

            <div className="mt-6 border-t pt-4 text-sm text-slate-600">
              <p>Quick contact</p>
              <div className="flex gap-3 mt-3">
                <a
                  href="https://www.linkedin.com/in/barani25"
                  target="_blank"
                  rel="noreferrer"
                  className="px-3 py-2 rounded-md border"
                >
                  LinkedIn
                </a>
                <a
                  href="mailto:baranitalks@gmail.com"
                  className="px-3 py-2 rounded-md border"
                >
                  Email
                </a>
              </div>
            </div>
          </aside>

          {/* 🟢 Bottom-right floating close button */}
          <div className="fixed bottom-6 right-6 z-50 md:hidden">
            <button
              onClick={() => setOpen(false)}
              aria-label="Close navigation menu"
              className="w-14 h-14 rounded-full bg-white shadow-lg flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-teal-300"
            >
              <svg
                className="w-6 h-6"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  d="M6 6l12 12M6 18L18 6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </button>
          </div>
        </>
      )}
    </>
  );
}

export default Navbar;
