import { NavLink } from 'react-router-dom';
import './Nav.css';

const Nav = () => {
  return (
    <nav className="nav-container">
      <ul className="nav-list">
        <li className="nav-item">
          <NavLink to="/" className="nav-link">Inicio</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/counter" className="nav-link">Contador</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/login" className="nav-link">Login</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
