// src/pages/about.tsx
import { Link } from 'react-router-dom';
import './about.css';


function about() {

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

      {/* NEW: This div will be our Flex Container for the text and image */}
      <div className="aboutmain-content">
        <div className="aboutcontent-wrapper">
          <p className="aboutcontent-text">
Hi, I'm Abigail — a former art student turned computer science major with a passion for blending creativity and technology.
I recently got married and I'm currently studying Computer Science with an emphasis in Human-Centered Computing. I chose this path to challenge myself — combining my love for design with the logic and structure of tech.

I designed and coded this site myself using React, Vite, and Amazon Web Services. I’m always learning, always exploring, and deeply interested in pursuing a career in UX design — where thoughtful design meets real human impact.

Outside of coding and design, I love animals and strive to be a kind, encouraging friend to everyone I meet.
          </p>
        </div>
        <div className="aboutphoto-frame-wrapper">
          <div className="aboutphoto-frame-container">
            <div className="aboutphoto-frame">
              {/* Consider removing the inline width="550px" from the img tag for better CSS control */}
              <img src="./images/wed2.jpg" alt="Abigail Durham" />
            </div>
          </div>
        </div>
      </div>
      {/* END NEW FLEX CONTAINER */}

    </div>
  );
}

export default about;