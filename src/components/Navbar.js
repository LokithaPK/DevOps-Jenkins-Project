import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">Space Exploration</div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/missions">Missions</Link></li>
        <li><Link to="/gallery">Gallery</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;