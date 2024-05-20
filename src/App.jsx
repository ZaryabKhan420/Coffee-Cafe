import React, { useEffect } from "react";
import {
  Header,
  Hero,
  Footer,
  AvailablePlatform,
  BestProducts,
  PremiumProduct,
  Testimonials,
} from "./components/Index";
import "./App.css";
import Aos from "aos";
import "aos/dist/aos.css";
function App() {
  useEffect(() => {
    Aos.init({
      duration: 700,
      delay: 100,
      offset: 100,
      easing: "ease-in",
    });
    Aos.refresh();
  }, []);

  return (
    <>
      <Header />
      <Hero />
      <BestProducts />
      <PremiumProduct />
      <AvailablePlatform />
      <Testimonials />
      <Footer />
    </>
  );
}

export default App;
