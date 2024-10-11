import Layout from "@/components/layout/layout";
import Hero from "@/components/hero/hero5";
import About from "@/components/course-programme/serviceBox";
import Service from "@/components/course-programme/servce";
import ServiceBox from "@/components/serviceBox";
import Contact from "@/components/contact/contact";

export default function Home() {
  return (
    <Layout>
      <Hero />
      <About />
      <Service />
      <ServiceBox />
      <Contact />
    </Layout>
  );
}
