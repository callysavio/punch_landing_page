import React from "react";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import Courses from "../components/Courses";
import Talents from "../components/Talents";
import HowItWorked from "../components/HowItWorked";
import RecruitmentSteps from "../components/RecruitmentSteps";
import WhyChoose from "../components/WhyChoose";
import FAQSection from "../components/Faq";
import Footer from "../components/footer";
const LandingPage = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <Courses />
      <Talents />
      <HowItWorked />
      <RecruitmentSteps />
      <WhyChoose />
      <FAQSection />
      <Footer />
    </div>
  );
};

export default LandingPage;
