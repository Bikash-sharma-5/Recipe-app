import React from 'react';
import './style2.css'; // Optional: You can create a CSS file for styles

const HeroBanner = () => {
  return (
    <div className="home-container">
      <header className="hero-section">
        <div className="hero-text">
          <h1>Welcome to Delicious Bites!</h1>
          <p>Your one-stop destination for mouthwatering food.</p>
          <a href="#menu" className="cta-button">Explore Our Menu</a>
        </div>
      </header>

      <section className="about-section" id="about">
        <h2>About Us</h2>
        <p>We offer a variety of cuisines prepared with the freshest ingredients and flavors from around the world. Whether you're in the mood for pizza, burgers, or sushi, we've got you covered.</p>
      </section>

      <section className="specials-section" id="menu">
        <h2>Our Specials</h2>
        <div className="menu-items">
          <div className="menu-item">
            <img src="https://via.placeholder.com/200" alt="Dish 1" />
            <h3>Special Pizza</h3>
            <p>Our signature pizza topped with fresh ingredients.</p>
          </div>
          <div className="menu-item">
            <img src="https://via.placeholder.com/200" alt="Dish 2" />
            <h3>Deluxe Burger</h3>
            <p>A juicy burger with premium beef and all the toppings.</p>
          </div>
          <div className="menu-item">
            <img src="https://via.placeholder.com/200" alt="Dish 3" />
            <h3>Fresh Sushi</h3>
            <p>Handmade sushi rolls made with the freshest fish.</p>
          </div>
        </div>
      </section>

      <section className="footer-section">
        <p>&copy; 2025 Delicious Bites. All Rights Reserved.</p>
      </section>
    </div>
  );
};

export default HeroBanner;
