// src/pages/gallery.tsx
import { Link } from 'react-router-dom';
import './gallery.css';

function Gallery() {
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
    <div className="content-wrapper">
    <p className="content-text">
      THIS IS MY GALLERY PAGE.
    </p>
    </div>
  <div className="photo-frame-container">
    <div className="photo-frame-wrapper">
    <div className="photo-frame">
      <img src="./images/abigail-durham-portrait.jpg" alt="Abigail Durham" width="550px"/>
    </div>
  </div>
  </div>
</div>

  
  );
}

export default Gallery;
