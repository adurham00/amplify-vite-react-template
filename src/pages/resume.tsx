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
      {/* THIS IS THE MAIN CONTENT WRAPPER FOR THE RESUME PAGE */}
      <div className="resume-content-wrapper">
        {/* If you want introductory text above the images, uncomment and add it here: */}
        {/* <p className="resume-content-text">
          This is some introductory text for my resume page.
        </p> */}

        {/* NEW FLEX CONTAINER FOR TWO IMAGE BOXES - MOVED INSIDE resume-content-wrapper */}
        <div className="resume-downloads-container">

          {/* RESUME VIEWER BOX */}
          <div className="download-item-wrapper">
            <div className="download-photo-frame">
              <a href="/images/resume.png" target="_blank" rel="noopener noreferrer">
                <img src="/images/resume.png" alt="View Abigail Preece's Resume Image" />
              </a>
            </div>
            <p className="download-label">View Resume Image</p>
          </div>

          {/* COVER LETTER VIEWER BOX */}
          <div className="download-item-wrapper">
            <div className="download-photo-frame">
              <a href="/images/cover.png" target="_blank" rel="noopener noreferrer">
                <img src="/images/cover.png" alt="View Abigail Preece's Cover Letter Image" />
              </a>
            </div>
            <p className="download-label">View Cover Letter Image</p>
          </div>

        </div>
        {/* END NEW FLEX CONTAINER */}

      </div> {/* END resume-content-wrapper */}

    </div>
  );
}

export default resume;