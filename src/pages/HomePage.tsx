// src/pages/HomePage.tsx
import { Link } from 'react-router-dom'; // Import Link for navigation
import './HomePage.css'; // This line imports your CSS file


function HomePage() {
  return (

      <div className="header-content">
        <div className="nav-wrapper">
        <nav>
          <ul className="main-nav-list">
            <li><Link to="/todos">Home</Link></li>
            <li><Link to="/todos">About</Link></li>
            <li><Link to="/todos">Socials</Link></li>
            <li><Link to="/about">Resume</Link></li>
            {/* You can add more navigation links here as you create new pages */}
          </ul>
        </nav>
        </div>
        <h1>DurhamDesigns</h1>
      </div>
    );
  }

export default HomePage;