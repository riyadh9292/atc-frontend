import React from "react";
import Banner from "@/components/molecules/banner/Banner";
import AboutSection from "@/components/molecules/about/AboutSection";
import WorldMarket from "@/components/molecules/worldMarket/WorldMarket";
import Testimonials from "@/components/molecules/testimonials/Testimonials";
import JoinCommunity from "@/components/molecules/join-community/JoinCommunity";
import Questions from "@/components/molecules/questions/Questions";

const Landing = () => {
  return (
    <section>
      <Banner />
      <AboutSection />
      <WorldMarket />
      <JoinCommunity />
      {/* <ServiceSection /> */}
      <Questions/>
      <Testimonials />
      {/* <Contact /> */}
    </section>
  );
};

export default Landing;
