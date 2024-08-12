import { useEffect } from "preact/hooks";
import HomeAbout from "../../section/HomeAbout";
import Services from "../../section/Services";
import Slider from "../../section/Slider";
import Stats from "../../section/Stats";
import Projects from "../../section/Projects";
import Video from "../../section/Video";
import Testinomials from "../../section/Testimonials";
import CTA from "../../section/CTA";
import Clients from "../../section/Clients";
import Blog from "../../section/blog";
import Footerhome from "../../section/footerhome";
export function Home() {
  useEffect(() => {
    document.title = "Legendary Ship Movers | Home";
    // Function to load a script
    const loadScript = (src) => {
      return new Promise((resolve, reject) => {
        const script = document.createElement("script");
        script.src = src;
        script.onload = () => resolve();
        script.onerror = () => reject(`Failed to load script: ${src}`);
        document.body.appendChild(script);
      });
    };

    // Load scripts sequentially
    loadScript("assets/js/main.js")
      .then(() => {
        console.log("All scripts loaded successfully.");
      })
      .catch((error) => {
        console.error(error);
      });

    // Cleanup function to remove the scripts when the component unmounts
    return () => {
      const scripts = document.querySelectorAll(
        'script[src="assets/js/main.js"]'
      );
      scripts.forEach((script) => document.body.removeChild(script));
    };
  }, []);
  return (
    <>
      <Slider />
      <Services />
      <HomeAbout />
      <Stats />
      <Projects />
      <Video />
      <Testinomials />
      <CTA />
      <Blog />
      <Clients />
      <Footerhome />
    </>
  );
}
