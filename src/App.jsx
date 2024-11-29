import React, { useState, useEffect, useRef } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Feature from "./Components/Feature";
import WebsiteLoader from "./Components/websiteloader";
import Ourservices from "./Components/Ourservices";
import Whyfoneshack from "./Components/Whyfoneshack";
import Marquee from "./Components/Marquee";
import Footer from "./Components/Footer";
import Hero1 from "./MobilePage/Hero1";
import Mobilecard from "./MobilePage/Mobilecard";
import Marquee1 from "./MobilePage/Marquee1";
import Footer1 from "./MobilePage/Footer1";
import Hero2 from "./Accessories/Hero2";
import Accessoriescard from "./Accessories/Accessoriescard";
import Applecard from "./Accessories/Applecard";
import Samsungcard from "./Accessories/Samsungcard";
import Mybattable from "./Accessories/Mybattable";
import Contactus from "./Contactus/Contactus";
const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const featureSectionRef = useRef(null);
  const mobilePhoneRef = useRef(null);
  const accessoriesRef = useRef(null);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);
  const scrollToFeature = () => {
    featureSectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToMobilePhone = () => {
    mobilePhoneRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToAccessories = () => {
    accessoriesRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  const Home = () => (
    <div>
      <Hero scrollToFeature={scrollToFeature} />
      <div ref={featureSectionRef}>
        <Feature />
        <Ourservices />
        <Whyfoneshack />
        <Marquee />
        <Footer />
      </div>
    </div>
  );
  const MobilePhone = () => (
    <div>
      <Hero1 scrollToMobilePhone={scrollToMobilePhone} />
      <div ref={mobilePhoneRef}>
        <Mobilecard />
        <Marquee1 />
        <Footer1 />
      </div>
    </div>
  );
  const Accessories = () => (
    <div>
      <Hero2 scrollToAccessories={scrollToAccessories} />
      <div ref={accessoriesRef}>
        <Accessoriescard />
        <Applecard />
        <Samsungcard />
        <Mybattable />
        <Footer1 />
      </div>
    </div>
  );
  const Contact = () => (
    <div>
      <Contactus />
      <Footer1 />
    </div>
  );
  if (isLoading) {
    return <WebsiteLoader />;
  }

  return (
    <Router>
      <Navbar />
      <main className="pt-20">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mobilephones" element={<MobilePhone />} />
          <Route path="/accessories" element={<Accessories />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </Router>
  );
};
export default App;
