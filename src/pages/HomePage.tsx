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
    <FlipCard/>
    <FlipCard/>
    <FlipCard/>
    <FlipCard/>
    <FlipCard/>
    <FlipCard/>
  </section>
  </div>
</div>

  
  );
}

export default HomePage;
