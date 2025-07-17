import { Link } from 'react-router-dom';
import './resume.css'; // Ensure this CSS file is used for these styles

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
          {/* You can add text here if desired, otherwise, this paragraph will be empty */}
        </p>
      </div>

      {/* NEW FLEX CONTAINER FOR TWO IMAGE BOXES */}
      <div className="resume-downloads-container">

        {/* RESUME VIEWER BOX */}
        <div className="download-item-wrapper">
          <div className="download-photo-frame">
            {/* CHANGED: href points to the image file */}
            <a href="/images/resume.png" target="_blank" rel="noopener noreferrer">
              <img src="/images/resume.png" alt="View Abigail Preece's Resume Image" />
            </a>
          </div>
          <p className="download-label">View Resume Image</p> {/* Changed label text */}
        </div>

        {/* COVER LETTER VIEWER BOX */}
        <div className="download-item-wrapper">
          <div className="download-photo-frame">
            {/* CHANGED: href points to the image file */}
            <a href="/images/cover.png" target="_blank" rel="noopener noreferrer">
              <img src="/images/cover.png" alt="View Abigail Preece's Cover Letter Image" />
            </a>
          </div>
          <p className="download-label">View Cover Letter Image</p> {/* Changed label text */}
        </div>

      </div>
      {/* END NEW FLEX CONTAINER */}

    </div>
  );
}

export default resume;