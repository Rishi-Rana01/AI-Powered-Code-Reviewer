import { Link } from 'react-router-dom';
import './Home.css';

export default function NotFound() {
  return (
    <div className="home-container">
      <div className="hero-section">
        <h1 className="hero-title">Page Not Found</h1>
        <p className="hero-subtitle">We couldn't find the page you're looking for.</p>
        <Link to="/" className="cta-button">Return Home</Link>
      </div>
    </div>
  );
}
