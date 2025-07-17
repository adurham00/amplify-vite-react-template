// src/pages/social.tsx
import { Link } from 'react-router-dom';
import './resume.css';

function resume() {
 
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
    <div className="resume-content-wrapper">
    <p className="resume-content-text">
      THIS IS MY SOCIAL PAGE.
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

export default resume;
