"use client";

import { CarouselArrows } from "./CarouselArrows";
import { useScroller } from "@/hooks/useScroller";

const steps = [
  {
    icon: "consultation",
    title: "Free Consultation",
    text: "Tell us about your goals, budget, and academic background.",
  },
  {
    icon: "shortlist",
    title: "Personalised Shortlist",
    text: "We match you to destinations, universities, and courses that genuinely fit you.",
  },
  {
    icon: "application",
    title: "Application Support",
    text: "We manage the documents and admin, so you're never doing this alone.",
  },
  {
    icon: "support",
    title: "Visa & Pre-Departure",
    text: "Full visa guidance and preparation before you fly.",
  },
  {
    icon: "accommodation",
    title: "Arrival & Beyond",
    text: "We check in after you land, and stay by your side long after.",
  },
];

export function Roadmap() {
  const { ref, canPrev, canNext, prev, next } = useScroller();

  return (
    <section className="relative overflow-hidden bg-white py-16 md:py-20">
      <div className="container-ahz">
        <div className="flex flex-wrap items-center justify-between gap-5">
          <h2 className="text-[32px] font-bold leading-tight text-navy sm:text-[40px]">
            Your Study Abroad <span className="text-brand">Roadmap</span>
          </h2>
          <a
            href="#consultation"
            className="rounded-full border border-brand px-6 py-3 text-[15px] font-semibold text-brand transition-colors duration-200 hover:bg-brand hover:text-white"
          >
            Apply Now
          </a>
        </div>

        <div
          ref={ref}
          className="no-scrollbar -mx-5 mt-[86px] flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth px-5 pb-4 sm:-mx-8 sm:px-8 lg:-mx-16 lg:px-16"
        >
          {steps.map((s, i) => (
            <div key={s.title} className="relative w-[270px] shrink-0 snap-start sm:w-[290px]">
              {/* connector line */}
              <span
                aria-hidden
                className={`absolute top-[31px] h-[2px] bg-[#d9dce8] ${
                  i === 0 ? "left-6 -right-6" : "-left-0 -right-6"
                }`}
              />
              <div className="relative flex justify-center">
                <span className="flex h-[64px] w-[64px] items-center justify-center rounded-full border-2 border-brand bg-white transition-transform duration-300 hover:scale-110">
                  <img src={`/images/home/roadmap/${s.icon}.svg`} alt="" className="h-[26px] w-[26px]" />
                </span>
              </div>
              <div className="mt-[22px] h-[238px] rounded-[20px] border border-[#e6e8ef] bg-white px-8 pt-6 text-center shadow-[0_10px_30px_-24px_rgba(15,42,107,0.35)]">
                <h3 className="text-[20px] font-semibold leading-tight text-navy">{s.title}</h3>
                <p className="mt-2 text-[14px] leading-[1.6] text-[#5b6070]">{s.text}</p>
              </div>
            </div>
          ))}
        </div>

        <CarouselArrows
          onPrev={prev}
          onNext={next}
          canPrev={canPrev}
          canNext={canNext}
          className="mt-6"
        />
      </div>
    </section>
  );
}
