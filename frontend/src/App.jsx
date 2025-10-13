import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import CodeReviewer from './CodeReviewer';
import NotFound from './NotFound';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/review" element={<CodeReviewer />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
