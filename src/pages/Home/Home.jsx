import React, { useEffect } from "react";
import Categories from "../../components/Categories/Categories";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import OurCustomer from "../../components/OurCustomer/OurCustomer";
import Introduction from "../../components/Introduction/Introduction";
import Strengths from "../../components/Strengths/Strengths";
import Number from "../../components/Number/Number";
import Service from "../../components/Service/Service";
import News from "../../components/News/News";
import Partner from "../../components/Partner/Partner";
import Proud from "../../components/Proud/Proud";
import Slider from "../../components/Slider/Slider";
import ContactForm from "../../components/ContactForm/ContactForm";
export const Home = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <div className="container" style={{overflowX:"hidden"}}>
      <Navbar />
      <Slider />
      <OurCustomer />
      <Introduction />
      <Strengths />
      <Number />
      <Service />
      <Categories />
      <News />
      <Partner />
      <Proud />
      <ContactForm />
      <Footer />
    </div>
  );
};
export default Home;
