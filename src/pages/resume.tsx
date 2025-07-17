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
          THIS IS MY RESUME
        </p>
      </div>

      {/* NEW FLEX CONTAINER FOR TWO IMAGE BOXES */}
      <div className="resume-downloads-container"> {/* Renamed for clarity */}

        {/* RESUME DOWNLOAD BOX */}
        <div className="download-item-wrapper">
          <div className="download-photo-frame">
            <a href="/docs/PreeceAbigailResume.pdf" download="Resume.pdf">
              {/* Use a clear image representing a resume, or the first page of your resume PDF as a PNG/JPG */}
              <img src="./images/resume.png" alt="Download Abigail Preece's Resume" />
            </a>
            <p className="download-label">Download Resume</p>
          </div>
        </div>

        {/* COVER LETTER DOWNLOAD BOX */}
        <div className="download-item-wrapper">
          <div className="download-photo-frame">
            {/* Make sure you have a cover letter PDF in public/docs */}
            <a href="/docs/Abigail-Preece-CoverLetter.pdf" download="CoverLetter.pdf">
              {/* Use a clear image representing a cover letter, or a placeholder */}
              <img src="./images/cover.png" alt="Download Abigail Preece's Cover Letter" />
            </a>
            <p className="download-label">Download Cover Letter</p>
          </div>
        </div>

      </div>
      {/* END NEW FLEX CONTAINER */}

    </div>
  );
}

export default resume;