// src/pages/HomePage.tsx
import { Link } from 'react-router-dom';
import './HomePage.css';
import FlipCard from '../resources/FlipCard'; 


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
    <section className="grid">
    <FlipCard 
        image="/images/photo1.jpg" 
        alt="Project 1" 
        content="This is the first project." 
      />
      <FlipCard 
        image="/images/photo2.jpg" 
        alt="Project 2" 
        content="This is the second project." 
      />
      <FlipCard 
        image="/images/photo3.jpg" 
        alt="Project 3" 
        content="This is the third project." 
      />
  </section>
  </div>
</div>

  
  );
}

export default HomePage;
