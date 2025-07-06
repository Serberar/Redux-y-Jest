import { NavLink } from 'react-router-dom';
import styles from './nav.module.css';

const Nav = () => {
  return (
    <nav className={styles['nav-container']}>
      <ul className={styles['nav-list']}>
        <li className={styles['nav-item']}>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? `${styles['nav-link']} ${styles.active}`
                : styles['nav-link']
            }
          >
            Inicio
          </NavLink>
        </li>
        <li className={styles['nav-item']}>
          <NavLink
            to="/counter"
            className={({ isActive }) =>
              isActive
                ? `${styles['nav-link']} ${styles.active}`
                : styles['nav-link']
            }
          >
            Contador
          </NavLink>
        </li>
        <li className={styles['nav-item']}>
          <NavLink
            to="/login"
            className={({ isActive }) =>
              isActive
                ? `${styles['nav-link']} ${styles.active}`
                : styles['nav-link']
            }
          >
            Login
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
