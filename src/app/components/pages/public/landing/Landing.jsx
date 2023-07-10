import React from "react";
import Banner from "@/app/components/molecules/banner/Banner";
import AboutSection from "@/app/components/molecules/about/AboutSection";
import WorldMarket from "@/app/components/molecules/worldMarket/WorldMarket";
import ServiceSection from "@/app/components/molecules/service/ServiceSection";
import Testimonials from "@/app/components/molecules/testimonials/Testimonials";
import JoinCommunity from "@/app/components/molecules/join-community/JoinCommunity";
import FAQ from "@/app/components/molecules/faq/FAQ";
import Contact from "@/app/components/molecules/contact/Contact";

const Landing = () => {
  return (
    <section>
      <Banner />
      <AboutSection />
      <WorldMarket />
      <ServiceSection />
      <JoinCommunity />
      <Testimonials />
      <FAQ />
      <Contact />
    </section>
  );
};

export default Landing;
