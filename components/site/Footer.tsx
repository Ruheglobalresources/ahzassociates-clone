import { LOGO } from "./Header";
import { SocialLinks } from "./SocialLinks";

const columns = [
  {
    title: "Useful Links",
    links: ["Study Destinations", "Our International partners", "Explore Courses", "Available Scholarships", "Upcoming Events"],
  },
  {
    title: "Trending Destinations",
    links: ["The United Kingdom", "Canada", "Australia", "The USA"],
  },
  {
    title: "Explore AHZ",
    links: ["About Us", "Our Awards", "AHZ Careers", "News and Blogs", "Choosing your education agent", "Become a Partner", "Get in touch"],
  },
  {
    title: "Services",
    links: [
      "University Application Support",
      "Visa Application Support",
      "Travel Support",
      "Career Assessment",
      "Advice for Parents",
      "Support and Complaints",
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-[#04227a] text-white">
      <div className="container-ahz pb-8 pt-16">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_repeat(4,1fr)]">
          <div className="max-w-[280px]">
            <img src={LOGO} alt="AHZ Global University Representative" className="h-12 w-auto brightness-0 invert" />
            <p className="mt-5 text-[14px] leading-[1.7] text-white/70">
              One of the largest global study abroad representatives guiding students worldwide to the UK, Canada,
              Australia and the USA.
            </p>
          </div>

          {columns.map((c) => (
            <nav key={c.title} aria-label={c.title}>
              <h3 className="text-[15px] font-semibold text-white/90">{c.title}</h3>
              <ul className="mt-5 space-y-4">
                {c.links.map((l) => (
                  <li key={l}>
                    <a href="#" className="text-[15px] leading-snug transition-opacity hover:opacity-70">
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-14 flex flex-col gap-5 border-t border-white/15 pt-6 text-[13px] text-white/70 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} AHZ Associates. All rights reserved.</p>
          <div className="flex items-center gap-5">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Use</a>
          </div>
          <SocialLinks />
        </div>
      </div>
    </footer>
  );
}
