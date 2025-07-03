// src/pages/HomePage.tsx
import { Link } from 'react-router-dom';
import './HomePage.css';
import './ImageCarousel.css';

function HomePage() {
 
  return (
   <div className="HomePage-container">
  <div className="header-nav-group">
    <header className="TitleHeader">
      <h1>ABIGAIL<br />DURHAM</h1>
    </header>

    <nav className="nav-wrapper">
      <ul className="main-nav-list">
        <li><Link to="#">About</Link></li>
        <li><Link to="#">Social</Link></li>
        <li><Link to="#">Gallery</Link></li>
      </ul>
    </nav>
  </div>

  {/* Portfolio Grid */}
  <section className="portfolio">
  </section>
</div>

  
  );
}

export default HomePage;
