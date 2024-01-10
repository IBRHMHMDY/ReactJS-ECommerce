import { useEffect } from "react";
import Header from "./components/Header/Header";
import { Hero } from "./components/Hero/Hero";
import SellingProducts from "./components/Products/SellingProducts";
import RatedProducts from "./components/Products/RatedProducts";
import AOS from 'aos';
import "aos/dist/aos.css";
import Banner from "./components/Banner/Banner";

const App = () => {
  useEffect(()=>{
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    })
    AOS.refresh();
  },[AOS])
  
  return (
    <div >
      <Header />
      <Hero />
      <SellingProducts />
      <RatedProducts />
      <Banner />
    </div>
  )
}

export default App