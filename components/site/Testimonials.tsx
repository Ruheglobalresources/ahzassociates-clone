"use client";

import { useEffect, useState } from "react";
import { X } from "lucide-react";
import { CarouselArrows } from "./CarouselArrows";
import { useScroller } from "@/hooks/useScroller";

type Item =
  | { type: "video"; name: string; thumb: string; youtube: string }
  | { type: "quote"; name: string; avatar: string; text: string };

const items: Item[] = [
  {
    type: "video",
    name: "Ugochukwu",
    thumb: "/images/people/ugochukwu.original.png",
    youtube: "0zjFBU4eUwM",
  },
  {
    type: "quote",
    name: "Aiman Atiqur Rahman",
    avatar: "/images/people/Aiman_Atiqur_Rahman.original.jpg",
    text: "I'm glad to get UK visa for my masters. Thanks to Ahz for helping from taking decision till getting the visa. Md. Samiul Karim who is always been helpful after his office ours also.",
  },
  {
    type: "video",
    name: "Ekene",
    thumb: "/images/people/ekene.original.png",
    youtube: "PN1X8_QpWjw",
  },
  {
    type: "quote",
    name: "Abdul Mutaleb",
    avatar: "/images/people/Abdul_Mutaleb.original.jpg",
    text: "I received my UK student visa on January 29, 2025, and I\u2019m now here in the UK, all thanks to the incredible support from AHZ Associate Sylhet. The entire process was smooth, and the guidance I received from my counselor, Prothoma Chowdhury, was outstanding.",
  },
  {
    type: "video",
    name: "victoria",
    thumb: "/images/people/victoria_3IDxHjs.original.png",
    youtube: "uHJgxCAYsKo",
  },
  {
    type: "quote",
    name: "Tohida Sultana",
    avatar: "/images/people/Tohida_Sultana.original.jpg",
    text: "Thanks to AHZ team for supporting me. I am really blessed that I got your support. From application to UKVI interview even after getting visa I got all the guidelines and information with small details from AHZ team which made my journey the easiest.",
  },
];

export function Testimonials() {
  const { ref, canPrev, canNext, prev, next } = useScroller();
  const [video, setVideo] = useState<string | null>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setVideo(null);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <section className="relative overflow-hidden py-16 md:py-20">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(30% 40% at 100% 0%, #fdeff1 0%, rgba(253,239,241,0) 70%)",
        }}
      />
      <div className="container-ahz relative">
        <div className="flex items-start justify-between gap-6">
          <div>
            <h2 className="text-[32px] font-bold leading-tight text-navy sm:text-[40px]">
              Hear directly from <span className="text-brand">our students</span>
            </h2>
            <p className="mt-5 text-[17px] text-[#5b6070]">
              Hear from students who&apos;ve started their journeys with the help of AHZ.
            </p>
          </div>
          <CarouselArrows
            onPrev={prev}
            onNext={next}
            canPrev={canPrev}
            canNext={canNext}
            className="hidden shrink-0 sm:flex"
          />
        </div>

        <div
          ref={ref}
          className="no-scrollbar -mx-5 mt-12 flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth px-5 pb-4 sm:-mx-8 sm:px-8 lg:-mx-16 lg:px-16"
        >
          {items.map((it) =>
            it.type === "video" ? (
              <button
                key={it.name}
                type="button"
                onClick={() => setVideo(it.youtube)}
                className="group relative h-[470px] w-[300px] shrink-0 snap-start overflow-hidden rounded-[20px] bg-[#e7e9ef] text-left sm:w-[375px]"
              >
                <img
                  src={it.thumb}
                  alt={it.name}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <span className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#0b1f5c]/85 via-[#0b1f5c]/30 to-transparent" />
                <span className="absolute left-1/2 top-1/2 flex h-[66px] w-[66px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-[0_10px_30px_rgba(0,0,0,0.25)] transition-transform duration-300 group-hover:scale-110">
                  <img src="/images/home/icons/play.svg" alt="" className="ml-1 h-4 w-4" />
                </span>
                <span className="absolute bottom-5 left-[18px] text-[16px] font-bold text-white">
                  {it.name}
                </span>
              </button>
            ) : (
              <article
                key={it.name}
                className="flex h-[470px] w-[300px] shrink-0 snap-start flex-col rounded-[20px] border border-[#e6e8ef] bg-white p-[26px] sm:w-[400px]"
              >
                <img src="/images/home/icons/quote.svg" alt="" className="h-[27px] w-auto self-start" />
                <blockquote className="mt-8 max-w-[300px] text-[15px] leading-[1.6] text-[#1f2333]">
                  {it.text}
                </blockquote>
                <div className="mt-auto flex items-center gap-3 border-t border-[#dfe2ea] pt-5">
                  <img
                    src={it.avatar}
                    alt={it.name}
                    className="h-[46px] w-[46px] rounded-full object-cover"
                  />
                  <span className="text-[15px] font-bold text-navy">{it.name}</span>
                </div>
              </article>
            ),
          )}
        </div>

        <CarouselArrows
          onPrev={prev}
          onNext={next}
          canPrev={canPrev}
          canNext={canNext}
          className="mt-4 sm:hidden"
        />
      </div>

      {/* video modal */}
      {video && (
        <div
          className="fixed inset-0 z-[90] flex items-center justify-center bg-black/75 p-4 backdrop-blur-sm"
          onClick={() => setVideo(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="relative aspect-video w-full max-w-[900px] overflow-hidden rounded-2xl bg-black shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <iframe
              className="h-full w-full"
              src={`https://www.youtube.com/embed/${video}?autoplay=1`}
              title="Student testimonial"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          <button
            type="button"
            aria-label="Close video"
            onClick={() => setVideo(null)}
            className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full bg-white text-navy"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
      )}
    </section>
  );
}
