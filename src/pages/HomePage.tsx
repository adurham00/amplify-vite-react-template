// src/pages/HomePage.tsx
import { Link } from 'react-router-dom';
import './HomePage.css';
import './ImageCarousel.css';

function HomePage() {
  const portfolioItems = [
    {
      id: 1,
      title: 'Portfolio 1',
      subtitle: 'ABIGAIL DURHAM',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
    {
      id: 2,
      title: 'Portfolio 2',
      subtitle: 'ABIGAIL DURHAM',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
    {
      id: 3,
      title: 'Portfolio 3',
      subtitle: 'ABIGAIL DURHAM',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
   {
      id: 3,
      title: 'Portfolio 4',
      subtitle: 'ABIGAIL DURHAM',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },  
  ];

  return (
    <div className="HomePage-container">
      
      {/* Title Header */}
      <header className="TitleHeader">
        <h1>ABIGAIL<br />DURHAM</h1>
      </header>

      {/* Navigation */}
      <nav className="nav-wrapper">
        <ul className="main-nav-list">
          <li><Link to="#">About</Link></li>
          <li><Link to="#">Social</Link></li>
          <li><Link to="#">Gallery</Link></li>
        </ul>
      </nav>

      {/* Portfolio Grid */}
      <section className="portfolio">
        {portfolioItems.map((item, index) => (
          <div key={item.id} className={`portfolio-row ${index % 2 !== 0 ? 'reverse' : ''}`}>
            <div className={index % 2 !== 0 ? 'image-box-right' : 'image-box-left'}></div>
            <div className={index % 2 !== 0 ? 'text-box-right' : 'text-box-left'}>
              <h2>{item.title}</h2>
              <h3>{item.subtitle}</h3>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </section>

    </div>
  );
}

export default HomePage;
