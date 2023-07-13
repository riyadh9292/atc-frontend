import React from "react";
import Banner from "@/app/components/molecules/banner/Banner";
import AboutSection from "@/app/components/molecules/about/AboutSection";
import WorldMarket from "@/app/components/molecules/worldMarket/WorldMarket";
import Testimonials from "@/app/components/molecules/testimonials/Testimonials";
import JoinCommunity from "@/app/components/molecules/join-community/JoinCommunity";
import Questions from "@/app/components/molecules/questions/Questions";

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
