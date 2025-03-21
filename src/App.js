import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import BackToTop from './components/BackToTop';
import Home from './pages/Home';
import Missions from './pages/Missions';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import './styles/App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/missions" element={<Missions />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <BackToTop />
      </div>
    </Router>
  );
}

export default App;