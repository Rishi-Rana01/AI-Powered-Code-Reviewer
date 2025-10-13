import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import CodeReviewer from './CodeReviewer';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/review" element={<CodeReviewer />} />
      </Routes>
    </Router>
  );
}

export default App;
