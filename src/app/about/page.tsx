import Layout from "@/components/layout/layout";
import Hero from "@/components/hero/hero2";
import About from "@/components/about/about";
import Numbers from "@/components/about/numbers";
import Ethos from "@/components/about/ethos";
import Contact from "@/components/contact/contact";

export default function Home() {
  return (
    <Layout>
      <Hero />
      <About />
      <Numbers />
      <Ethos />
      <Contact />
    </Layout>
  );
}
