import { useNavigate } from 'react-router-dom';
import './Home.css';

function Home() {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/review');
  };

  return (
    <div className="home-container">
      <div className="hero-section">
        <h1 className="hero-title">AI-Powered Code Reviewer</h1>
        <p className="hero-subtitle">
          Elevate your code quality with intelligent AI-driven reviews. Get instant feedback,
          best practices suggestions, and performance optimizations for your JavaScript code.
        </p>
        <button className="cta-button" onClick={handleGetStarted}>
          Get Started
        </button>
      </div>

      <div className="features-section">
        <h2>How It Works</h2>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">📝</div>
            <h3>Paste Your Code</h3>
            <p>Simply paste your code into our editor.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🤖</div>
            <h3>AI Analysis</h3>
            <p>Our advanced AI analyzes your code for quality, performance, and best practices.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">💡</div>
            <h3>Get Insights</h3>
            <p>Receive detailed feedback with suggestions for improvement.</p>
          </div>
        </div>
      </div>

      <div className="features-list">
        <h2>Key Features</h2>
        <ul>
          <li>✨ Real-time code analysis</li>
          <li>🔍 Bug detection and fixes</li>
          <li>⚡ Performance optimization suggestions</li>
          <li>🛡️ Security vulnerability checks</li>
          <li>📚 Best practices recommendations</li>
          <li>🎨 Code readability improvements</li>
        </ul>
      </div>
    </div>
  );
}

export default Home;
