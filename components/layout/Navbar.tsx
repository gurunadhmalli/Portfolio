"use client";

import { useEffect, useState } from "react";
import { navLinks, resumeUrl } from "@/data/resume";
import { Close, Menu } from "@/components/ui/Icons";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Highlight the nav link for whichever section sits in the middle of the viewport
  useEffect(() => {
    const sections = navLinks
      .map((link) => document.querySelector<HTMLElement>(link.href))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300 ${
        scrolled || open ? "border-line-soft bg-bg/80 backdrop-blur-md" : "border-transparent"
      }`}
    >
      <nav aria-label="Primary" className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 md:px-8">
        <a href="#top" aria-label="Gurunadh Malli, home" className="group flex items-center gap-2.5">
          <span className="grid h-8 w-8 place-items-center rounded-lg border border-line bg-surface text-[13px] font-semibold tracking-tight text-ink transition-colors group-hover:border-accent">
            GM
          </span>
          <span className="hidden text-sm font-medium text-ink sm:block">Gurunadh Malli</span>
        </a>

        <div className="hidden items-center gap-1 md:flex">
          <ul className="flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = active === link.href;
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    aria-current={isActive ? "true" : undefined}
                    className={`relative rounded-md px-3 py-2 text-sm transition-colors ${
                      isActive ? "text-ink" : "text-muted hover:text-ink"
                    }`}
                  >
                    {link.label}
                    <span
                      className={`absolute inset-x-3 -bottom-[13px] h-px bg-accent transition-opacity ${
                        isActive ? "opacity-100" : "opacity-0"
                      }`}
                      aria-hidden
                    />
                  </a>
                </li>
              );
            })}
          </ul>
          <a
            href={resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-4 rounded-lg border border-line px-3.5 py-1.5 text-sm font-medium text-ink transition-colors hover:border-accent-hover hover:text-accent-hover"
          >
            Résumé
          </a>
        </div>

        <button
          type="button"
          className="grid h-9 w-9 place-items-center rounded-lg border border-line text-ink md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <Close /> : <Menu />}
        </button>
      </nav>

      {open && (
        <div id="mobile-menu" className="border-t border-line-soft md:hidden">
          <ul className="mx-auto max-w-6xl px-5 py-3">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`block rounded-md px-2 py-2.5 text-[15px] ${
                    active === link.href ? "text-accent-hover" : "text-ink"
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="mt-2 border-t border-line-soft pt-3">
              <a
                href={resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block px-2 py-2 text-[15px] text-accent-hover"
              >
                Download résumé
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
