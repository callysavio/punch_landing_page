import React from "react";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import Courses from "../components/Courses";
import Talents from "../components/Talents";
import HowItWorked from "../components/HowItWorked";
import RecruitmentSteps from "../components/RecruitmentSteps";
const LandingPage = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <Courses />
      <Talents />
      <HowItWorked />
      <RecruitmentSteps />
    </div>
  );
};

export default LandingPage;
