import "./App.css";
import AboutUs from "./components/AboutUs/AboutUs";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import HeroSection from "./components/HeroSection/HeroSection";
import LatestNews from "./components/Latest_News/Latest_News";
import OurShop from "./components/OurShop/OurShop";
import Tournaments from "./components/Tournaments/Tournaments";

function App() {

  return (
    <div className="app">
      {/* Include the HeroSection component */}
      <div id="hero">
        <HeroSection />
      </div>

      {/* Include the AboutUs component */}
      <div id="about">
        <AboutUs />
      </div>

      {/* Include the Tournaments component */}
      <div id="tournaments">
        <Tournaments />
      </div>

      {/* Include the Contact component */}
      <div id="contact">
        <Contact />
      </div>

      {/* Include the OurShop component */}
      <div id="shop">
        <OurShop />
      </div>

      {/* Include the LatestNews component */}
      <div id="news">
        <LatestNews />
      </div>

      {/* Include the Footer component */}
      <Footer />
    </div>
  );
}

export default App;
