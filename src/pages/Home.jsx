import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './kk.css'; // Optional: Add your custom styles
import HeroBanner from "../components/HeroBanner";

const Home = () => {
  useEffect(() => {
    // Initialize ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);
    
    const sections = document.querySelectorAll("section");
    const lastIndex = sections.length - 1;

    // Array of food images to be used as background for each section
    const foodImages = [
      './u1.jpg', // Pizza
      './u2.jpg', // Burger
      './u3.jpg', // Sushi
      './u4.jpg', // Salad
      './u5.jpg'  // Pasta
    ];

    sections.forEach((section, i) => {
      const bg = section.querySelector(".bg");
      const h1 = section.querySelector("h1");

      // Set a food image for each section based on the index
      bg.style.backgroundImage = `url(${foodImages[i]})`;

      // Create ScrollTrigger for each section
      ScrollTrigger.create({
        trigger: section,
        start: () => (i === 0 ? "top top" : "top bottom"),
        end: () => (i === lastIndex ? "top top" : "bottom top"),
        onRefresh: (self) => {
          // Create timeline that moves h1 and bg vertically
          const tl = gsap.timeline({ paused: true, defaults: { ease: 'none', overwrite: 'auto' } })
            .fromTo(h1, { y: () => (i === 0 ? 0 : (window.innerHeight / 2) * 1.5) }, { y: () => (i === lastIndex ? 0 : -(window.innerHeight / 2) * 1.5) }, 0)
            .fromTo(bg, { y: () => (i === 0 ? -(window.innerHeight / 2) : 0) }, { y: () => (i === lastIndex ? -(window.innerHeight / 2) : -window.innerHeight) }, 0)
            .progress(self.progress); // Set initial progress to match ScrollTrigger

          // Update timeline progress on ScrollTrigger update
          ScrollTrigger.create({
            trigger: section,
            onUpdate: (self) => gsap.to(tl, { duration: 0.75, progress: self.progress })
          });
        },
      });
    });
  }, []);

  return (
    <div>
      <header className="hero-section">
        <div className="hero-text">
          <h1>Welcome to Delicious Bites!</h1>
          <p>Your one-stop destination for mouthwatering food.</p>
          <a href="#menu" className="cta-button">Explore Our Menu</a>
        </div>
      </header>

      {/* Sections with Food Background Images */}
      <section>
        <div className="bg"></div>
        <h1>Our Food, Our Health</h1>
      </section>
      <section>
        <div className="bg"></div>
        <h1>Hey look, a Little</h1>
      </section>
      <section>
        <div className="bg"></div>
        <h1>They just keep coming</h1>
      </section>
      <section>
        <div className="bg"></div>
        <h1>Eat Muchh</h1>
      </section>
      <section>
        <div className="bg"></div>
        <h1>Nice, right?</h1>
      </section>
    </div>
  );
};

export default Home;
