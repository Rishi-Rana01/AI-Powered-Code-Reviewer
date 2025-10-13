import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import "prismjs/themes/prism-tomorrow.css";
import Editor from "react-simple-code-editor";
import prism from "prismjs";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github-dark.css";
import Markdown from 'react-markdown';
import './CodeReviewer.css';
import axios from 'axios';

// Use Vite env variable VITE_API_BASE if provided, otherwise fallback to localhost
const API_BASE = import.meta.env.VITE_API_BASE || 'http://localhost:3000';

function CodeReviewer() {
  const navigate = useNavigate();
  const [code, setCode] = useState(`function sum(){
  return 1+1;
}`);

  const [review, setReview] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    prism.highlightAll();
  }, []);

  async function reviewCode() {
    setIsLoading(true);
    try {
  const response = await axios.post(`${API_BASE}/ai/get-review`, { code });
      setReview(response.data);
    } catch (error) {
      setReview('Error: Unable to get review. Please check your backend connection.');
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="code-reviewer-container">
      <header className="reviewer-header">
        <button className="back-button" onClick={() => navigate('/')}>
          ← Back to Home
        </button>
        <h1>AI Code Reviewer</h1>
      </header>

      <main className="reviewer-main">
        <div className="left-panel">
          <div className="panel-header">
            <h2>Your Code</h2>
            <button
              onClick={reviewCode}
              className="review-button"
              disabled={isLoading}
            >
              {isLoading ? 'Reviewing...' : 'Review Code'}
            </button>
          </div>
          <div className="code-editor">
            <Editor
              value={code}
              onValueChange={code => setCode(code)}
              highlight={code => prism.highlight(code, prism.languages.javascript, "javascript")}
              padding={15}
              style={{
                fontFamily: '"Fira Code", "Fira Mono", monospace',
                fontSize: 14,
                border: "none",
                borderRadius: "8px",
                height: "100%",
                width: "100%",
                backgroundColor: "#1e1e1e",
                color: "#d4d4d4"
              }}
            />
          </div>
        </div>

        <div className="right-panel">
          <div className="panel-header">
            <h2>AI Review</h2>
          </div>
          <div className="review-content">
            {review ? (
              <Markdown rehypePlugins={[rehypeHighlight]}>{review}</Markdown>
            ) : (
              <div className="placeholder">
                <div className="placeholder-icon">🤖</div>
                <p>Paste your code and click "Review Code" to get AI-powered feedback!</p>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}

export default CodeReviewer;
