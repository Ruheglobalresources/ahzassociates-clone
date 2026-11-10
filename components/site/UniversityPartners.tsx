"use client";

import { CarouselArrows } from "./CarouselArrows";
import { useScroller } from "@/hooks/useScroller";

type Uni = {
  name: string;
  location: string;
  logo: string;
  ranks: { label: string; value: string }[];
};

const unis: Uni[] = [
  {
    name: "University of Southampton",
    location: "Southampton, Hampshire, England",
    logo: "southampton-logo-new.original.jpg",
    ranks: [
      { label: "Guardian", value: "#18" },
      { label: "QS", value: "#111" },
      { label: "THE", value: "#136" },
    ],
  },
  {
    name: "University of Liverpool",
    location: "Liverpool, England",
    logo: "liverpool-logo.original.jpg",
    ranks: [
      { label: "Guardian", value: "#30" },
      { label: "QS", value: "#139" },
      { label: "THE", value: "#154" },
    ],
  },
  {
    name: "Newcastle University",
    location: "Newcastle upon Tyne, Tyne and Wear, England",
    logo: "newcastle-university-logo-new.original.webp",
    ranks: [
      { label: "Guardian", value: "#82" },
      { label: "QS", value: "#149" },
      { label: "THE", value: "#154" },
    ],
  },
  {
    name: "University of York",
    location: "Heslington, York, England",
    logo: "University_of_York-logo.original.jpg",
    ranks: [
      { label: "Guardian", value: "#46" },
      { label: "QS", value: "#158" },
      { label: "THE", value: "#168" },
    ],
  },
  {
    name: "Lancaster University",
    location: "Bailrigg, City of Lancaster, England",
    logo: "lancaster-logo.original.jpg",
    ranks: [
      { label: "Guardian", value: "#27" },
      { label: "QS", value: "#164" },
      { label: "THE", value: "#183" },
    ],
  },
  {
    name: "Queen's University Belfast",
    location: "Belfast, Northern Ireland",
    logo: "queen-s-university-belfast-logo.webp",
    ranks: [
      { label: "Guardian", value: "#43" },
      { label: "QS", value: "#174" },
      { label: "THE", value: "#196" },
    ],
  },
  {
    name: "University of Reading",
    location: "Whiteknights House, Reading RG6 6UR, United Kingdom",
    logo: "University_of_Reading-logo.original.jpg",
    ranks: [
      { label: "Guardian", value: "#55" },
      { label: "QS", value: "#196" },
      { label: "THE", value: "#219" },
    ],
  },
  {
    name: "Loughborough University",
    location: "Loughborough, England, United Kingdom",
    logo: "loughborough-logo.original.jpg",
    ranks: [
      { label: "Guardian", value: "#9" },
      { label: "QS", value: "#203" },
    ],
  },
  {
    name: "University of Strathclyde",
    location: "Glasgow, Scotland",
    logo: "University_of_Strathclyde-logo.original.jpg",
    ranks: [
      { label: "Guardian", value: "#17" },
      { label: "QS", value: "#230" },
    ],
  },
  {
    name: "University of Surrey",
    location: "Surrey, England",
    logo: "University_of_Surrey-logo.original.webp",
    ranks: [
      { label: "Guardian", value: "#39" },
      { label: "QS", value: "#246" },
      { label: "THE", value: "#237" },
    ],
  },
  {
    name: "University of Sussex",
    location: "East Sussex, England",
    logo: "University_of_Sussex-logo.original.jpg",
    ranks: [
      { label: "Guardian", value: "#47" },
      { label: "QS", value: "#273" },
      { label: "THE", value: "#273" },
    ],
  },
  {
    name: "University of Aberdeen",
    location: "Aberdeen, Scotland",
    logo: "aberdeen-logo.original.jpg",
    ranks: [
      { label: "Guardian", value: "#50" },
      { label: "QS", value: "#288" },
      { label: "THE", value: "#233" },
    ],
  },
];

export function UniversityPartners() {
  const { ref, canPrev, canNext, prev, next } = useScroller();

  return (
    <section id="universities" className="relative overflow-hidden py-16 md:py-20">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(45% 60% at 0% 40%, #e9ecf5 0%, rgba(233,236,245,0) 70%), radial-gradient(30% 40% at 100% 100%, #fdeff1 0%, rgba(253,239,241,0) 70%)",
        }}
      />
      <div className="container-ahz relative">
        <div className="flex items-start justify-between gap-6">
          <div className="max-w-[660px]">
            <h2 className="text-[32px] font-bold leading-tight text-navy sm:text-[40px]">
              Explore Our <span className="text-brand">University Partners</span>
            </h2>
            <p className="mt-5 text-[17px] leading-[1.5] text-[#5b6070]">
              Discover universities and education providers across our study
              destinations. Explore institutions by country, course and study
              level to find options that match your goals.
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
          className="no-scrollbar -mx-5 mt-12 flex snap-x snap-mandatory gap-[26px] overflow-x-auto scroll-smooth px-5 pb-6 sm:-mx-8 sm:px-8 lg:-mx-16 lg:px-16"
        >
          {unis.map((u) => (
            <article
              key={u.name}
              className="group flex w-[300px] shrink-0 snap-start flex-col rounded-[20px] border border-[#eceef4] bg-white px-7 pb-7 pt-6 shadow-[0_10px_30px_-20px_rgba(15,42,107,0.3)] transition-shadow duration-300 hover:shadow-[0_24px_44px_-22px_rgba(15,42,107,0.4)] sm:w-[382px]"
            >
              <div className="flex h-[92px] items-center justify-center border-b border-[#e6e8ef] pb-4">
                <img
                  src={`/images/uni/${u.logo}`}
                  alt={`${u.name} logo`}
                  className="max-h-[60px] max-w-[190px] object-contain"
                />
              </div>
              <h3 className="mt-4 text-[20px] font-bold leading-tight text-navy">{u.name}</h3>
              <p className="mt-2 flex items-start gap-2 text-[14px] text-[#5b6070]">
                <img src="/images/home/icons/pin.svg" alt="" className="mt-[3px] h-3.5 w-3.5 shrink-0" />
                <span className="line-clamp-1">{u.location}</span>
              </p>

              <dl className="mt-4">
                {u.ranks.map((r, i) => (
                  <div
                    key={r.label}
                    className={`flex items-center justify-between py-[13px] text-[14px] ${
                      i < u.ranks.length - 1 ? "border-b border-dashed border-[#dfe2ea]" : ""
                    }`}
                  >
                    <dt className="text-[#5b6070]">{r.label}</dt>
                    <dd className={`font-bold ${i === 0 ? "text-brand" : "text-[#1a1d29]"}`}>{r.value}</dd>
                  </div>
                ))}
                {u.ranks.length < 3 && <div className="h-[47px]" aria-hidden />}
              </dl>

              <div className="mt-auto pt-6">
                <a
                  href="#universities"
                  className="block rounded-full border border-brand py-3 text-center text-[15px] font-semibold text-brand transition-colors duration-200 hover:bg-brand hover:text-white"
                >
                  View University
                </a>
              </div>
            </article>
          ))}
        </div>

        <CarouselArrows
          onPrev={prev}
          onNext={next}
          canPrev={canPrev}
          canNext={canNext}
          className="mt-2 sm:hidden"
        />
      </div>
    </section>
  );
}
