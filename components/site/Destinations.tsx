"use client";

import { ArrowRight } from "lucide-react";
import { CarouselArrows } from "./CarouselArrows";
import { useScroller } from "@/hooks/useScroller";
import Reveal from "./Reveal";

const destinations = [
  {
    name: "the UK",
    img: "/images/home/destination/uk.webp",
    desc: "Choose from globally recognised universities, a wide range of undergraduate and postgraduate courses, and a long-established international education system.",
  },
  {
    name: "Australia",
    img: "/images/home/destination/australia.webp",
    desc: "Explore globally recognised universities, diverse study options and opportunities to gain international experience in a major English-speaking study destination.",
  },
  {
    name: "Ireland",
    img: "/images/home/destination/ireland.webp",
    desc: "Study in a growing European education and technology hub, with universities and institutions offering programmes across business, technology, science and other fields.",
  },
  {
    name: "Germany",
    img: "/images/home/destination/germany.webp",
    desc: "Explore a strong higher education system with renowned universities and specialist institutions, particularly across engineering, technology, science and business.",
  },
  {
    name: "France",
    img: "/images/home/destination/france.webp",
    desc: "Choose from universities and specialist institutions, including internationally recognised business schools and programmes across a wide range of disciplines.",
  },
  {
    name: "Sweden",
    img: "/images/home/destination/sweden.webp",
    desc: "Explore an innovative higher education system known for research, technology, sustainability and internationally focused programmes.",
  },
  {
    name: "Malaysia",
    img: "/images/home/destination/malaysia.webp",
    desc: "Study in a diverse, internationally connected education hub with a range of universities, courses and comparatively accessible study options.",
  },
  {
    name: "the UAE",
    img: "/images/home/destination/uae.webp",
    desc: "Explore an international education hub with universities and campuses offering programmes across business, technology, engineering and other popular subjects.",
  },
  {
    name: "Turkey",
    img: "/images/home/destination/turkey.webp",
    desc: "Explore universities offering a broad range of undergraduate and postgraduate programmes, with opportunities to study in a country connecting Europe and Asia.",
  },
];

export default function Destinations() {
  const { ref, canPrev, canNext, prev, next } = useScroller();
  const s = { canPrev, canNext, onPrev: prev, onNext: next };

  return (
    <section id="destinations" className="relative overflow-hidden bg-gradient-to-br from-[#f7eef1] via-[#f3f1f6] to-[#eef1f8] py-16 md:py-[60px]">
      <div className="relative mx-auto max-w-[1280px] px-6 md:px-16">
        <div className="grid gap-10 lg:grid-cols-[340px_1fr] xl:grid-cols-[380px_1fr]">
          {/* Left: copy */}
          <Reveal className="flex flex-col lg:pt-[86px]">
            <h2 className="text-[34px] font-bold leading-[1.15] text-[#0c1f5b] md:text-[40px]">
              Apply <span className="text-[#d0103a]">2027 the year</span> you study abroad
            </h2>
            <p className="mt-6 max-w-[360px] text-[17px] leading-[1.65] text-[#5f6377]">
              Applications are opening now. Start planning early to secure the right course, university, and destination for
              the 2027 intake.
            </p>
            <a
              href="#"
              className="group mt-10 inline-flex w-fit items-center gap-3 rounded-full bg-gradient-to-b from-[#e8193f] to-[#c40d33] px-7 py-4 text-[18px] font-semibold text-white shadow-[0_12px_28px_rgba(208,16,58,0.3)] transition-transform hover:-translate-y-0.5 lg:mt-auto"
            >
              Book For Consultation
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </a>
          </Reveal>

          {/* Right: carousel */}
          <div className="min-w-0">
            <div className="mb-8 flex items-center justify-between gap-4">
              <h3 className="text-[24px] font-bold text-[#0c1f5b] md:text-[26px]">
                Explore our <span className="text-[#d0103a]">study destinations</span>
              </h3>
              <CarouselArrows {...s} className="hidden sm:flex" />
            </div>

            <div
              ref={ref}
              className="no-scrollbar -mr-6 flex snap-x snap-mandatory gap-6 overflow-x-auto pb-2 pr-6 md:-mr-16 md:pr-16 xl:mr-[calc((1280px_-_100vw)/2_-_64px)] xl:pr-[calc((100vw_-_1280px)/2_+_64px)]"
            >
              {destinations.map((d) => (
                <a
                  key={d.name}
                  href="#"
                  className="group relative flex h-[400px] w-[270px] shrink-0 snap-start flex-col overflow-hidden rounded-[18px] bg-white shadow-[0_10px_30px_rgba(12,31,91,0.06)]"
                >
                  <img
                    src={d.img}
                    alt={`Study in ${d.name}`}
                    className="absolute inset-x-0 bottom-0 h-[62%] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* white-to-transparent wash so copy sits on image top */}
                  <div className="absolute inset-0 bg-gradient-to-b from-[#f4f6fb] via-[#f4f6fb]/95 via-40% to-transparent to-60%" />
                  <div className="relative p-6">
                    <h4 className="text-[21px] font-bold text-[#0c1f5b]">Study in {d.name}</h4>
                    <p className="mt-2 text-[13.5px] leading-[1.6] text-[#4b5068]">{d.desc}</p>
                    <span className="mt-3 inline-flex items-center gap-1 text-[14px] font-semibold text-[#d0103a]">
                      Explore
                      <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" strokeWidth={2.5} />
                    </span>
                  </div>
                </a>
              ))}
            </div>
            <CarouselArrows {...s} className="mt-6 sm:hidden" />
          </div>
        </div>
      </div>
    </section>
  );
}
