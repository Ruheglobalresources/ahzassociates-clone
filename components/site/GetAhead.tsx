import Reveal from "./Reveal";

const STUDENT = "/images/home/ahead-student.png";

const ICONS = {
  award: "/images/home/icons/award.svg",
  globe: "/images/home/icons/globe.svg",
  cap: "/images/home/icons/cap.svg",
  exchange: "/images/home/icons/exchange.svg",
};

function StatCard({ icon, text, className = "" }: { icon: string; text: string; className?: string }) {
  return (
    <div
      className={`group rounded-[20px] border border-[#eceef4] bg-white p-7 shadow-[0_2px_10px_rgba(12,31,91,0.03)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(12,31,91,0.08)] ${className}`}
    >
      <span className="grid h-[52px] w-[52px] place-items-center rounded-full bg-[#f0f2f7] transition-colors group-hover:bg-[#fdeef1]">
        {/* biome-ignore lint/a11y/useAltText: decorative icon */}
        <img src={icon} alt="" className="h-6 w-6" />
      </span>
      <h3 className="mt-5 text-[19px] font-semibold leading-[1.1] text-[#0c1f5b]">{text}</h3>
    </div>
  );
}

export default function GetAhead() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#f8f9fc] via-white to-[#f7f8fb] pb-20 pt-10">
      <div className="pointer-events-none absolute -right-20 top-10 h-[400px] w-[400px] rounded-full bg-[#ffe7ea] opacity-50 blur-[110px]" />
      <div className="relative mx-auto max-w-[1280px] px-6 md:px-16">
        <Reveal>
          <h2 className="text-center text-[32px] font-bold leading-tight text-[#0c1f5b] md:text-[40px]">
            Get ahead with <span className="text-[#d0103a]">AHZ!</span>
          </h2>
        </Reveal>

        <div className="mt-14 grid items-end gap-6 md:grid-cols-2 lg:grid-cols-[1fr_1.5fr_1fr] lg:gap-7">
          {/* left column */}
          <div className="order-2 flex flex-col gap-6 lg:order-1 lg:pb-0">
            <Reveal delay={100}>
              <StatCard icon={ICONS.award} text="15+ years supporting international students" className="lg:min-h-[188px]" />
            </Reveal>
            <Reveal delay={200}>
              <StatCard icon={ICONS.globe} text="200+ university & education partners" className="lg:min-h-[166px]" />
            </Reveal>
          </div>

          {/* center visual */}
          <Reveal className="order-1 md:col-span-2 lg:order-2 lg:col-span-1">
            <div className="relative mx-auto max-w-[400px] pt-[90px] lg:max-w-none">
              <div className="relative h-[316px] overflow-hidden rounded-[28px] bg-gradient-to-r from-[#0c1f6b] via-[#5a1a5e] to-[#d0103a]">
                <div className="absolute -left-10 top-16 h-[300px] w-[300px] rounded-full border-[28px] border-white/[0.06]" />
                <div className="absolute -right-24 -bottom-24 h-[260px] w-[260px] rounded-full bg-white/[0.05]" />
              </div>
              <img
                src={STUDENT}
                alt="AHZ student counsellor"
                className="absolute bottom-0 left-1/2 h-[406px] w-auto -translate-x-1/2 object-contain"
              />
            </div>
          </Reveal>

          {/* right column */}
          <div className="order-3 flex flex-col gap-6">
            <Reveal delay={150}>
              <StatCard icon={ICONS.cap} text="30,000+ students guided" className="lg:min-h-[166px]" />
            </Reveal>
            <Reveal delay={250}>
              <StatCard icon={ICONS.exchange} text="750+ counsellors worldwide" className="lg:min-h-[166px]" />
            </Reveal>
          </div>
        </div>

        <div className="mt-12 flex justify-center">
          <a
            href="#"
            className="rounded-full bg-gradient-to-b from-[#e8193f] to-[#c40d33] px-6 py-3 text-[17px] font-semibold text-white shadow-[0_10px_24px_rgba(208,16,58,0.28)] transition-transform hover:-translate-y-0.5"
          >
            Apply Now
          </a>
        </div>
      </div>
    </section>
  );
}
