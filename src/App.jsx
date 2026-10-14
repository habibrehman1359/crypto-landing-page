import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import MarketTrend from "./components/MarketTrend";
import Features from "./components/Features";
import Testimonial from "./components/Testimonial";
import HowItWorks from "./components/HowItWorks";
import LearnCrypto from "./components/LearnCrypto";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="app-layout">
      <Navbar />
      <Hero />
      <MarketTrend />
      <Features />
      <Testimonial />
      <HowItWorks />
      <LearnCrypto />
      <Footer />
    </div>
  );
}
