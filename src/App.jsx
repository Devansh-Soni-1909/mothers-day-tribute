import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import StoryDetail from './pages/StoryDetail';
import Navbar from './components/Navbar';
import Contact from './pages/Contact';
import Categories from './pages/Categories';
import About from './pages/About'; // Import the About component

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Navbar onSearch={(query) => document.dispatchEvent(new CustomEvent('search', { detail: query }))} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/articles/:id" element={<StoryDetail />} />
          <Route path="/about" element={<About />} /> {/* Update to use About component */}
          <Route path="/categories" element={<Categories />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;