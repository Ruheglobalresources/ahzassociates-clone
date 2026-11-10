"use client";

import { Minus, Plus } from "lucide-react";
import { useState } from "react";
import Reveal from "./Reveal";

const faqs = [
  {
    q: "What is AHZ?",
    a: "AHZ Global is an international student recruitment and education consultancy that helps students explore courses, universities and study destinations around the world. Our counsellors support students throughout the process, from choosing a course and university through to application, visa preparation and pre-departure.",
  },
  {
    q: "Why should I work with AHZ?",
    a: "With over 15 years of experience, 200+ university and education partners and 750+ counsellors worldwide, AHZ offers free, impartial guidance tailored to your goals. We help you make informed decisions and support you at every stage, from your first consultation to arrival at your chosen university.",
  },
  {
    q: "How do I choose the right university?",
    a: "Think about the subject you want to study, your budget, preferred location, entry requirements, rankings and career outcomes. Our counsellors will help you compare options side by side and build a personalised shortlist that genuinely fits your academic profile and ambitions.",
  },
  {
    q: "How do I choose the right country to study in?",
    a: "Consider factors such as tuition fees, cost of living, course length, post-study work options, language and lifestyle. AHZ can walk you through the strengths of each destination including the UK, Australia, Ireland, Germany, France and more so you can choose with confidence.",
  },
  {
    q: "Which countries can I study in through AHZ?",
    a: "AHZ supports students applying to universities in the UK, Australia, Ireland, Germany, France, Sweden, Malaysia, the UAE and Turkey, with our partner network continuing to grow across popular study destinations.",
  },
  {
    q: "Do I need a university and course already picked out?",
    a: "Not at all. Many students come to us with only a rough idea of what they want to study. We start with a free consultation to understand your interests and background, then recommend courses and universities that match.",
  },
  {
    q: "Do I need to already know English to study abroad?",
    a: "Most English-taught programmes require proof of English proficiency, such as IELTS, PTE or an equivalent qualification. Some universities offer waivers or pre-sessional English courses, and our counsellors can advise you on the options available for your profile.",
  },
  {
    q: "Can I work while I study?",
    a: "In many destinations, international students can work part-time during term and full-time during holidays, subject to visa conditions. For example, students in the UK can usually work up to 20 hours per week during term time. We will explain the rules for your chosen country.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faqs" className="relative overflow-hidden py-20 md:py-28">
      {/* soft radial atmosphere */}
      <div className="pointer-events-none absolute -left-40 top-10 h-[620px] w-[620px] rounded-full bg-[radial-gradient(circle,rgba(226,232,246,0.9)_0%,rgba(255,255,255,0)_70%)]" />
      <div className="pointer-events-none absolute -right-40 bottom-0 h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle,rgba(253,232,236,0.7)_0%,rgba(255,255,255,0)_70%)]" />

      <div className="relative mx-auto grid max-w-[1280px] gap-10 px-6 md:px-16 lg:grid-cols-[1fr_1.5fr] lg:gap-14 xl:px-20">
        <Reveal>
          <div className="lg:sticky lg:top-32">
            <h2 className="text-[38px] font-bold leading-none text-[#0c1f5b] md:text-[44px]">FAQs</h2>
            <p className="mt-6 max-w-[330px] text-[16px] leading-[1.55] text-[#5f6377]">
              Find quick answers to common questions about studying abroad. If you need more information, our counsellors
              are always available to help.
            </p>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <ul>
            {faqs.map((f, i) => {
              const isOpen = open === i;
              return (
                <li key={f.q} className="border-b border-[#e3e5eb]">
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-6 px-1 py-6 text-left"
                  >
                    <span
                      className={`text-[17px] font-semibold leading-snug transition-colors md:text-[18px] ${
                        isOpen ? "text-[#0c1f5b]" : "text-[#0c1f5b] hover:text-[#d0103a]"
                      }`}
                    >
                      {f.q}
                    </span>
                    <span
                      className={`grid h-[30px] w-[30px] shrink-0 place-items-center rounded-full transition-all duration-300 ${
                        isOpen ? "bg-[#d0103a] text-white rotate-180" : "bg-[#eef0f5] text-[#0c1f5b]"
                      }`}
                    >
                      {isOpen ? <Minus className="h-4 w-4" strokeWidth={2.5} /> : <Plus className="h-4 w-4" strokeWidth={2.5} />}
                    </span>
                  </button>
                  <div
                    className={`grid transition-[grid-template-rows] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                      isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="px-1 pb-10 pr-6 pt-2 text-[15px] leading-[1.6] text-[#5f6377] md:text-[16px]">{f.a}</p>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
