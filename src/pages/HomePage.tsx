// src/pages/HomePage.tsx
import { Link } from 'react-router-dom'; // Import Link for navigation
import './HomePage.css'; // This line imports your CSS file
import { useEffect, useState } from 'react';
import './ImageCarousel.css';

function HomePage() {
  return (
    <div className="HomePage-container">
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


<div className="TitleHeader">
  <h1>Abigail Durham</h1>
</div>


<div className="Imagebox">

</div>



</div>   


    );
  }

export default HomePage;