import { useEffect } from "preact/hooks";
import CTA from "../../section/CTA";
import Stats from "../../section/Stats";
import Breadcrumbs from "../../section/Breadcrumbs";
import Aboutus from "../../section/Aboutus";
export function About() {
  useEffect(() => {
    document.title = "Legendary Ship Movers | About";
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
      <Breadcrumbs pageTitle="About us" />
      <Aboutus />
      <Stats /> <br />
      <CTA />
    </>
  );
}
