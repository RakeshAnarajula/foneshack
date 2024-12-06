import { useState, useEffect, useRef } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Feature from "./Components/Feature";
import Loader from "./Components/Loader";
import Ourservices from "./Components/Ourservices";
import Whyfoneshack from "./Components/Whyfoneshack";
import Testinomial from "./Components/Testinomial";
import Marquee from "./Components/Marquee";
import Footer from "./Components/Footer";
import Hero1 from "./MobilePage/Hero1";
import Mobilecard from "./MobilePage/Mobilecard";
import Marquee1 from "./MobilePage/Marquee1";
import Hero2 from "./Accessories/Hero2";
import Accessoriescard from "./Accessories/Accessoriescard";
import Applecard from "./Accessories/Applecard";
import Samsungcard from "./Accessories/Samsungcard";
import Mybattable from "./Accessories/Mybattable";
import Term from "./Pages/Term";
import Privacy from "./Pages/Privacy";
import Contactus from "./Contactus/Contactus";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const featureSectionRef = useRef(null);
  const mobilePhoneRef = useRef(null);
  const accessoriesRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
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
        <Testinomial />
        <Marquee />
      </div>
    </div>
  );

  const MobilePhone = () => (
    <div>
      <Hero1 scrollToMobilePhone={scrollToMobilePhone} />
      <div ref={mobilePhoneRef}>
        <Mobilecard />
        <Marquee1 />
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
      </div>
    </div>
  );

  const PrivacyPage = () => (
    <div>
      <Privacy />
    </div>
  );

  const TermsPage = () => (
    <div>
      <Term />
    </div>
  );

  const Contact = () => (
    <div>
      <Contactus />
    </div>
  );

  if (isLoading) {
    return <Loader />;
  }

  return (
    <Router>
      <Navbar />
      <main className="pt-20">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mobilephones" element={<MobilePhone />} />
          <Route path="/accessories" element={<Accessories />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/terms" element={<TermsPage />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
