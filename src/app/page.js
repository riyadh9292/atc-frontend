import Layout from "./components/layouts/layout/layout";
import AboutSection from "./components/molecules/About/AboutSection";
import Hero from "./components/molecules/Hero/HeroSection";
import MissionSection from "./components/molecules/Mission/MissionSection";
import ServiceSection from "./components/molecules/Service/ServiceSection";
import VisionSection from "./components/molecules/Vision/VisionSection";
import Landing from "./components/pages/public/landing/Landing";

export default function Home() {
  return (
    <Layout>
      <Landing />
      {/* <Hero />
      <AboutSection/> */}
      {/* <MissionSection/>
      <VisionSection/>
      <ServiceSection/> */}
    </Layout>
  );
}
