import Layout from "@/components/layout/layout";
import Hero from "@/components/hero/hero1";
import About from "@/components/about";
import Service from "@/components/servce";
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
