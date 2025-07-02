// src/pages/HomePage.tsx
import { Link } from 'react-router-dom'; // Import Link for navigation
import './HomePage.css'; // This line imports your CSS file


function HomePage() {
  return (
    <div>
      <h1>DurhamDesigns</h1>
      <p>This is the landing page for your Amplify-powered application.</p>
      <nav>
        <ul style={{ listStyle: 'none', padding: 0, display: 'flex', gap: '15px' }}>
          <li><Link to="/todos">Go to Todos</Link></li>
          <li><Link to="/about">Learn About Us</Link></li>
          {/* You can add more navigation links here as you create new pages */}
        </ul>
      </nav>
    </div>
  );
}

export default HomePage;