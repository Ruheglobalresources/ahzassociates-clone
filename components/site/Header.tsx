"use client";

import { useEffect, useState } from "react";
import { ChevronDown, Menu, X, Search, MapPin, GraduationCap } from "lucide-react";
import { Facebook, Instagram, Linkedin, XIcon } from "./SocialIcons";

export const LOGO = "/images/home/logo.svg";

const destinations = [
  "UK",
  "Australia",
  "Ireland",
  "Germany",
  "France",
  "Sweden",
  "Malaysia",
  "UAE",
  "Turkey",
];

const topLinks = ["Get in touch", "Events", "News", "Blogs"];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [destOpen, setDestOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-50 w-full bg-white transition-shadow duration-300 ${
        scrolled ? "shadow-[0_4px_20px_rgba(12,31,91,0.08)]" : "shadow-[0_1px_0_rgba(12,31,91,0.06)]"
      }`}
    >
      {/* Top utility bar (desktop only) */}
      <div className="hidden xl:block border-b border-[#eef0f5]">
        <div className="mx-auto flex h-9 max-w-[1280px] items-center justify-end gap-6 px-16 text-[13px] text-[#4b5068]">
          {topLinks.map((l) => (
            <a key={l} href="#" className="hover:text-[#d0103a] transition-colors">
              {l}
            </a>
          ))}
        </div>
      </div>

      <div className="mx-auto flex h-20 max-w-[1280px] items-center justify-between px-6 md:px-16">
        <a href="#" className="shrink-0" aria-label="AHZ Home">
          {/* biome-ignore lint/a11y/useAltText: decorative logo */}
          <img src={LOGO} alt="AHZ Global University Representative" className="h-10 w-auto md:h-[42px]" />
        </a>

        {/* Desktop nav */}
        <nav className="hidden xl:flex items-center gap-8 text-[15px] font-semibold text-[#0c1f5b]">
          <div
            className="relative"
            onMouseEnter={() => setDestOpen(true)}
            onMouseLeave={() => setDestOpen(false)}
          >
            <button type="button" className="flex items-center gap-1 py-6 hover:text-[#d0103a] transition-colors">
              Study Destination
              <ChevronDown className={`h-4 w-4 transition-transform ${destOpen ? "rotate-180" : ""}`} />
            </button>
            <div
              className={`absolute left-1/2 top-full -translate-x-1/2 w-[420px] rounded-2xl border border-[#eef0f5] bg-white p-4 shadow-[0_20px_50px_rgba(12,31,91,0.12)] transition-all duration-200 ${
                destOpen ? "visible opacity-100 translate-y-0" : "invisible opacity-0 translate-y-2"
              }`}
            >
              <div className="grid grid-cols-3 gap-1">
                {destinations.map((d) => (
                  <a
                    key={d}
                    href="#destinations"
                    className="rounded-lg px-3 py-2 text-[14px] font-medium text-[#0c1f5b] hover:bg-[#fdf0f2] hover:text-[#d0103a] transition-colors"
                  >
                    {d}
                  </a>
                ))}
              </div>
            </div>
          </div>
          <a href="#universities" className="hover:text-[#d0103a] transition-colors">University Finder</a>
          <a href="#subjects" className="hover:text-[#d0103a] transition-colors">Course Search</a>
          <a href="#" className="hover:text-[#d0103a] transition-colors">Find Our Offices</a>
          <a
            href="#"
            className="rounded-full bg-gradient-to-b from-[#e8193f] to-[#c40d33] px-6 py-3 text-[15px] font-semibold text-white shadow-[0_8px_20px_rgba(208,16,58,0.25)] transition-transform hover:-translate-y-0.5"
          >
            Book For Consultation
          </a>
        </nav>

        <button
          type="button"
          aria-label="Open menu"
          onClick={() => setOpen(true)}
          className="xl:hidden p-2 text-[#0c1f5b]"
        >
          <Menu className="h-7 w-7" strokeWidth={1.75} />
        </button>
      </div>

      {/* Mobile drawer */}
      <div
        className={`fixed inset-0 z-[60] xl:hidden transition-opacity duration-300 ${
          open ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        <div className="absolute inset-0 bg-[#0c1f5b]/40 backdrop-blur-sm" onClick={() => setOpen(false)} />
        <aside
          className={`absolute right-0 top-0 flex h-full w-full max-w-[420px] flex-col bg-white shadow-2xl transition-transform duration-300 ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex h-20 items-center justify-between border-b border-[#eef0f5] px-6">
            {/* biome-ignore lint/a11y/useAltText: logo */}
            <img src={LOGO} alt="AHZ" className="h-9 w-auto" />
            <button type="button" aria-label="Close menu" onClick={() => setOpen(false)} className="p-2 text-[#0c1f5b]">
              <X className="h-6 w-6" />
            </button>
          </div>
          <div className="flex-1 overflow-y-auto px-6 py-6">
            <div className="grid grid-cols-3 gap-3 mb-6">
              {[
                { icon: GraduationCap, label: "University Finder" },
                { icon: Search, label: "Course Search" },
                { icon: MapPin, label: "Find Our Offices" },
              ].map(({ icon: Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  onClick={() => setOpen(false)}
                  className="flex flex-col items-center gap-2 rounded-2xl border border-[#eef0f5] bg-[#f7f8fc] p-3 text-center text-[13px] font-semibold text-[#0c1f5b]"
                >
                  <span className="grid h-10 w-10 place-items-center rounded-full bg-white text-[#d0103a] shadow-sm">
                    <Icon className="h-5 w-5" />
                  </span>
                  {label}
                </a>
              ))}
            </div>
            <a
              href="#"
              className="mb-6 block rounded-full bg-gradient-to-b from-[#e8193f] to-[#c40d33] py-3.5 text-center font-semibold text-white shadow-[0_8px_20px_rgba(208,16,58,0.25)]"
            >
              Book For Consultation
            </a>
            <p className="mb-3 text-[13px] font-semibold uppercase tracking-wider text-[#8a8fa3]">Study Destination</p>
            <ul className="mb-6 grid grid-cols-2 gap-2">
              {destinations.map((d) => (
                <li key={d}>
                  <a
                    href="#destinations"
                    onClick={() => setOpen(false)}
                    className="block rounded-lg px-3 py-2 text-[15px] font-medium text-[#0c1f5b] hover:bg-[#fdf0f2] hover:text-[#d0103a]"
                  >
                    {d}
                  </a>
                </li>
              ))}
            </ul>
            <ul className="space-y-1 border-t border-[#eef0f5] pt-4">
              {topLinks.map((l) => (
                <li key={l}>
                  <a href="#" className="block py-2 text-[16px] font-semibold text-[#0c1f5b] hover:text-[#d0103a]">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex items-center gap-3 border-t border-[#eef0f5] px-6 py-5">
            {[Facebook, Instagram, Linkedin, XIcon].map((Icon, i) => (
              <a
                // biome-ignore lint/suspicious/noArrayIndexKey: static list
                key={i}
                href="#"
                className="grid h-10 w-10 place-items-center rounded-full bg-[#d0103a] text-white transition-transform hover:-translate-y-0.5"
              >
                <Icon className="h-[18px] w-[18px]" />
              </a>
            ))}
          </div>
        </aside>
      </div>
    </header>
  );
}
