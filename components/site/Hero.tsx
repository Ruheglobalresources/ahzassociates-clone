"use client";

import { Search, Star } from "lucide-react";
import { useState } from "react";

const COLLAGE = "/images/home/hero-collage.webp";
const AVATARS = "/images/home/hero-avatars.png";

export default function Hero() {
  const [q, setQ] = useState("");

  return (
    <section className="relative overflow-hidden">
      {/* soft atmospheric background */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#eef1f7] via-[#f8f9fc] to-[#fdf3f4]" />
      <div className="pointer-events-none absolute -right-40 top-40 h-[520px] w-[520px] rounded-full bg-[#ffe3e7] opacity-60 blur-[120px]" />
      <div className="pointer-events-none absolute -left-40 -top-20 h-[420px] w-[420px] rounded-full bg-[#e3e8f6] opacity-70 blur-[100px]" />

      <div className="relative mx-auto grid max-w-[1280px] items-center gap-10 px-6 pb-20 pt-16 md:px-16 md:pt-[84px] lg:grid-cols-[1.15fr_1fr]">
        <div className="animate-fade-up">
          <h1 className="text-[34px] font-bold leading-[1.15] tracking-[-0.01em] text-[#0c1f5b] md:text-[40px] xl:text-[48px]">
            Study Abroad <span className="text-[#d0103a]">with AHZ</span>
          </h1>
          <p className="mt-6 max-w-[480px] text-[17px] font-light leading-[1.75] text-[#5f6377] md:text-[19px]">
            Explore universities, courses and study destinations around the world. AHZ helps students find the right fit,
            apply with confidence and prepare for your study abroad journey.
          </p>

          <form
            onSubmit={(e) => e.preventDefault()}
            className="mt-8 w-full max-w-[444px] rounded-full bg-gradient-to-r from-[#0c1f5b] to-[#d0103a] p-[1.5px] shadow-[0_10px_30px_rgba(12,31,91,0.06)]"
          >
            <label className="flex h-[54px] items-center gap-3 rounded-full bg-white px-6">
              <Search className="h-[18px] w-[18px] text-[#9b9ea9]" strokeWidth={1.75} />
              <input
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="Search courses, universities and cities"
                className="w-full bg-transparent text-[15px] text-[#0c1f5b] placeholder:text-[#8a8fa0] outline-none"
              />
            </label>
          </form>

          <div className="mt-7 flex flex-wrap items-center gap-5">
            {/* biome-ignore lint/a11y/useAltText: avatars */}
            <img src={AVATARS} alt="AHZ students" className="h-10 w-auto" />
            <div className="leading-tight">
              <p className="text-[13px] text-[#0c1f5b]">Evaluated by our students</p>
              <div className="mt-1 flex items-center gap-1.5 text-[13px]">
                <span className="flex items-center gap-[3px]">
                  {[0, 1, 2, 3, 4].map((i) => (
                    <Star key={i} className="h-[11px] w-[11px] fill-[#f28b1e] text-[#f28b1e]" />
                  ))}
                </span>
                <span className="font-semibold text-[#f28b1e]">4.9/5</span>
                <span className="font-bold text-[#0c1f5b]">125,000+ Student Reviews</span>
              </div>
            </div>
          </div>
        </div>

        <div className="relative flex justify-center lg:justify-end">
          <img
            src={COLLAGE}
            alt="AHZ students studying in the UK, Canada, Australia and Pakistan"
            className="animate-float-slow w-full max-w-[300px] sm:max-w-[420px] lg:max-w-[460px] drop-shadow-[0_20px_40px_rgba(12,31,91,0.12)]"
          />
        </div>
      </div>
    </section>
  );
}
