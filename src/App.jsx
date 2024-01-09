import { useEffect } from "react";
import Header from "./components/Header/Header";
import { Hero } from "./components/Hero/Hero";
import Products from "./components/Products/Products";
import AOS from 'aos';
import "aos/dist/aos.css";

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
      <Products />
    </div>
  )
}

export default App