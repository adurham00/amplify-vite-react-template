// src/pages/HomePage.tsx
import { Link } from 'react-router-dom';
import './HomePage.css';
import { useEffect, useState } from 'react';
import ImageCarousel from './ImageCarousel';
import './ImageCarousel.css';

function HomePage() {
  const portfolioItems = [
    {
      id: 1,
      title: 'ABIGAIL DURHAM',
      subtitle: 'ABIGAIL DURHAM',
      description: 'Lorem ipsum dolor sit amet... (etc)',
    },
    {
      id: 2,
      title: 'ABIGAIL DURHAM',
      subtitle: 'ABIGAIL DURHAM',
      description: 'Second item description text...',
    },
    {
      id: 3,
      title: 'ABIGAIL DURHAM',
      subtitle: 'ABIGAIL DURHAM',
      description: 'Third item description text...',
    },
  ];

  return (
    <div className="HomePage-container">
      
      {/* Title Header */}
      <header className="TitleHeader">
        <h1>ABIGAIL<br />DURHAM</h1>
      </header>

      {/* Navigation */}
      <nav className="nav-wrapper">
        <ul className="main-nav-list">
          <li><Link to="#">About</Link></li>
          <li><Link to="#">Social</Link></li>
          <li><Link to="#">Gallery</Link></li>
        </ul>
      </nav>

      {/* Portfolio Grid */}
      <section className="portfolio">
        {portfolioItems.map((item, index) => (
          <div key={item.id} className={`portfolio-row ${index % 2 !== 0 ? 'reverse' : ''}`}>
            <div className="image-box"></div>
            <div className="text-box">
              <h2>{item.title}</h2>
              <h3>{item.subtitle}</h3>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </section>

    </div>
  );
}

export default HomePage;
