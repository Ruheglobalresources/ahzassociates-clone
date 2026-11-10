import Header from "@/components/site/Header";
import Hero from "@/components/site/Hero";
import GetAhead from "@/components/site/GetAhead";
import Destinations from "@/components/site/Destinations";
import { PopularSubjects } from "@/components/site/PopularSubjects";
import { UniversityPartners } from "@/components/site/UniversityPartners";
import { Testimonials } from "@/components/site/Testimonials";
import { Roadmap } from "@/components/site/Roadmap";
import FAQ from "@/components/site/FAQ";
import { Blogs } from "@/components/site/Blogs";
import { Footer } from "@/components/site/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <GetAhead />
        <Destinations />
        <PopularSubjects />
        <UniversityPartners />
        <Testimonials />
        <Roadmap />
        <FAQ />
        <Blogs />
      </main>
      <Footer />
    </>
  );
}
