// src/pages/HomePage.tsx
import { Link } from 'react-router-dom';
import './HomePage.css';


function HomePage() {

  return (
    <div className="HomePage-container">
      <div className="header-nav-group">
        <Link to="/" className="home-link">
          <header className="TitleHeader">
            <h1 className="spaced-header1">ABIGAIL</h1>
            <h1 className="spaced-header2">DURHAM</h1>
          </header>
        </Link>

        <nav className="nav-wrapper">
          <ul className="main-nav-list">
            <li><Link to="/about">about</Link></li>
            <li><Link to="/resume">resume</Link></li>
            <li><Link to="/gallery">gallery</Link></li>
          </ul>
        </nav>
      </div>

      <div className="main-content-area">
        {/* === FIX IS HERE: Changed content-wrapper to home-content-wrapper === */}
        <div className="home-content-wrapper">
          <p className="content-text">
            Abigail Durham is a creative professional with a passion for design and storytelling.
            Explore her work and connect through the links above.
          </p>
        </div>
        <div className="photo-frame-container">
          <div className="photo-frame-wrapper">
            <div className="photo-frame">
              <img className="framed-photo" src="./images/abigail-durham-portrait.jpg" alt="Abigail Durham" />
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default HomePage;