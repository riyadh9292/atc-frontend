import Layout from "./components/layouts/layout/layout";
import AboutSection from "./components/molecules/About/AboutSection";
import Hero from "./components/molecules/Hero/HeroSection";
import MissionSection from "./components/molecules/Mission/MissionSection";

export default function Home() {
  return (
    <Layout>
      <Hero />
      <AboutSection/>
      <MissionSection/>
    </Layout>
  );
}
