// src/pages/HomePage.tsx
import { Link } from 'react-router-dom';
import './HomePage.css';


function HomePage() {
 
  return (
  <div className="HomePage-container">
  <div className="header-nav-group">
    <header className="TitleHeader">
      <h1 className="spaced-header1">ABIGAIL</h1>
      <h1 className="spaced-header2">DURHAM</h1>
    </header>

    <nav className="nav-wrapper">
      <ul className="main-nav-list">
        <li><Link to="#">about</Link></li>
        <li><Link to="#">social</Link></li>
        <li><Link to="#">gallery</Link></li>
      </ul>
    </nav>
  </div>
  <div className="photo-frame-container">
    <div className="photo-frame-wrapper">
    <div className="photo-frame">
      <img src="./images/abigail-durham-portrait.jpg" alt="Abigail Durham" width="550px"/>
    </div>
  </div>
  <div className="content-wrapper">
    <p className="content-text">
      Abigail Durham is a creative professional with a passion for design and storytelling. 
      Explore her work and connect through the links above.
    </p>
    </div>
  </div>
</div>

  
  );
}

export default HomePage;
