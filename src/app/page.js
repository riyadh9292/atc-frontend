import Layout from "./components/layouts/layout/layout";
import AboutSection from "./components/molecules/About/AboutSection";
import Hero from "./components/molecules/Hero/HeroSection";

export default function Home() {
  return (
    <Layout>
      <Hero />
      <AboutSection/>
    </Layout>
  );
}
