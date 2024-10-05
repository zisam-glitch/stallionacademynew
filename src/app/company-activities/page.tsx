import Layout from "@/components/layout/layout2";
import Hero from "@/components/hero/hero3";
import Gallery from "@/components/company-activities/gallery";
import Contact from "@/components/contact/contact";

export default function Home() {
  return (
    <Layout>
      <Hero />
      <Gallery />
      <Contact />
    </Layout>
  );
}
