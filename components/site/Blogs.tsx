import { ArrowRight } from "lucide-react";
import Reveal from "./Reveal";

const blogs = [
  {
    tag: "Study in UK",
    date: "Nov 10, 2026",
    title: "Part-Time Work in the UK for Algerian Students: A Guide",
    excerpt: "Choosing to pursue your higher education in the United Kingdom is a big decision, and many students want to know how part-time work fits in.",
    img: "/images/blogs/Algerian-student-working-part-time-while-studying-in-UK.webp",
  },
  {
    tag: "",
    date: "Mar 4, 2026",
    title: "Why 59,000 Indian Students Are Choosing Germany",
    excerpt: "For years, the dream destinations for Indian students were usually the UK, the USA and Canada, but that picture is changing quickly.",
    img: "/images/blogs/Study-in-Germany-59000-Indian-Students-in-2026.webp",
  },
  {
    tag: "Study in UK",
    date: "Nov 3, 2025",
    title: "Cost of Living in the UK for Saudi Students",
    excerpt: "Moving to the UK from Saudi Arabia is an important step, but getting used to the cost of living can take some planning.",
    img: "/images/blogs/Cost-of-living-in-UK-for-Saudi-students-guide.webp",
  },
];

export function Blogs() {
  return (
    <section id="blogs" className="py-16 md:py-20">
      <div className="container-ahz">
        <Reveal>
          <div className="flex items-center justify-between gap-5">
            <h2 className="text-[32px] font-bold leading-tight text-navy sm:text-[40px]">
              Our <span className="text-brand">Blogs</span>
            </h2>
            <a
              href="#blogs"
              className="rounded-full border border-brand px-6 py-3 text-[15px] font-semibold text-brand transition-colors hover:bg-brand hover:text-white"
            >
              View all
            </a>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {blogs.map((b, i) => (
            <Reveal key={b.title} delay={i * 100}>
              <a
                href="#blogs"
                className="group flex h-full flex-col overflow-hidden rounded-[20px] border border-[#eceef4] bg-white shadow-[0_8px_24px_rgba(12,31,91,0.05)] transition-shadow duration-300 hover:shadow-[0_20px_44px_rgba(12,31,91,0.10)]"
              >
                <div className="aspect-[3/2] overflow-hidden">
                  <img
                    src={b.img}
                    alt={b.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <div className="flex h-7 items-center justify-between">
                    {b.tag ? (
                      <span className="rounded-full bg-[#fdeef1] px-3 py-1 text-[12px] font-semibold text-brand">{b.tag}</span>
                    ) : (
                      <span />
                    )}
                    <span className="text-[13px] text-[#8a8fa3]">{b.date}</span>
                  </div>
                  <h3 className="mt-4 line-clamp-2 text-[19px] font-bold leading-snug text-navy">{b.title}</h3>
                  <p className="mt-3 line-clamp-2 text-[14px] leading-[1.6] text-[#5f6377]">{b.excerpt}</p>
                  <span className="mt-auto inline-flex items-center gap-1 pt-5 text-[14px] font-semibold text-brand">
                    Learn more
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" strokeWidth={2.5} />
                  </span>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
