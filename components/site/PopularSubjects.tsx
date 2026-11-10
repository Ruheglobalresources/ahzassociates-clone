import { ArrowRight } from "lucide-react";

const subjects = [
  { title: "Computer Science", icon: "computing" },
  { title: "AI & Data Science", icon: "computing" },
  { title: "Business & Management", icon: "business" },
  { title: "Nursing & Allied Health", icon: "nursing" },
  { title: "Engineering", icon: "engineering" },
  { title: "Cybersecurity", icon: "computing" },
  { title: "Law", icon: "law" },
  { title: "Medicine & Dentistry", icon: "medicine" },
  { title: "Social Sciences", icon: "social-sciences" },
  { title: "Design, Media & Creative Arts", icon: "creative-arts" },
  { title: "Architecture", icon: "architecture" },
];

const cardBase =
  "group relative flex h-[228px] flex-col rounded-[18px] border border-[#eceef4] bg-white p-[17px] shadow-[0_6px_22px_-14px_rgba(15,42,107,0.22)] transition-all duration-300 hover:-translate-y-1 hover:border-[#f3c9d0] hover:shadow-[0_22px_40px_-20px_rgba(15,42,107,0.35)]";

export function PopularSubjects() {
  return (
    <section id="subjects" className="relative overflow-hidden bg-white py-20 md:py-[84px]">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(35% 40% at 100% 0%, #fdf0f1 0%, rgba(253,240,241,0) 70%), radial-gradient(40% 40% at 0% 100%, #eff1f8 0%, rgba(239,241,248,0) 70%)",
        }}
      />
      <div className="container-ahz relative">
        <div className="mx-auto max-w-[600px] text-center">
          <h2 className="text-[32px] font-bold leading-tight text-navy sm:text-[40px]">
            Popular <span className="text-brand">Subjects</span>
          </h2>
          <p className="mt-4 text-[17px] leading-[1.5] text-[#6a6f7e]">
            From undergraduate degrees to postgraduate study, explore courses
            across the subjects students choose most often.
          </p>
        </div>

        <div className="mx-auto mt-14 grid max-w-[862px] grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 lg:gap-[17px]">
          {subjects.map((s) => (
            <a key={s.title} href="#subjects" className={cardBase}>
              <span className="flex h-[46px] w-[46px] items-center justify-center rounded-full bg-[#f1f3f8] transition-colors duration-300 group-hover:bg-[#fdecef]">
                <img src={`/images/home/faculties/${s.icon}.svg`} alt="" className="h-[22px] w-[22px]" />
              </span>
              <h3 className="mt-5 text-[15px] font-bold leading-[1.15] text-navy">{s.title}</h3>
              <span className="mt-auto inline-flex items-center gap-1 text-[14px] font-semibold text-brand">
                Learn more
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" strokeWidth={2.5} />
              </span>
            </a>
          ))}

          {/* browse card */}
          <a href="#subjects" className={`${cardBase} overflow-hidden`}>
            <img
              src="/images/home/browse-subjects.png"
              alt=""
              className="pointer-events-none absolute -right-[42px] bottom-0 h-[190px] w-auto max-w-none transition-transform duration-500 group-hover:scale-105"
            />
            <div className="relative">
              <h3 className="text-[15px] font-bold leading-[1.15] text-navy">Browse Subjects</h3>
              <p className="mt-2 max-w-[100px] text-[12px] leading-[1.6] text-[#8a8fa0]">
                See every subject area AHZ can help you pursue.
              </p>
              <span className="mt-2 inline-flex items-center gap-1 text-[14px] font-semibold text-brand">
                Learn more
                <ArrowRight className="h-3.5 w-3.5" strokeWidth={2.5} />
              </span>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
