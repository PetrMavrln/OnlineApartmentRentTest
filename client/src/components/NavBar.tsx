import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import {
  // ABOUT_ROUTE,
  // APARTMENTS_ROUTE,
  // CONTACTS_ROUTE,
  MAIN_ROUTE,
  // PAYMENT_ROUTE,
  // SERVICES_ROUTE,
} from '../utils/consts';
import styles from '../css-modules/navbar.module.css';
import { Link } from 'react-scroll';

const NavBar = () => {
  return (
    <Navbar className={styles.wrapper} collapseOnSelect expand="lg" bg="transperent">
      <Container className={styles.container}>
        <NavLink className={styles.brand} to={MAIN_ROUTE}>
          kds
        </NavLink>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav>
            <Link
              activeClass="active"
              to="services"
              spy={true}
              smooth={true}
              duration={300}
              className={styles.link}>
              Услуги
            </Link>
            <Link
              activeClass="active"
              to="apartments"
              spy={true}
              smooth={true}
              duration={300}
              className={styles.link}>
              Апартаменты
            </Link>
            {/* <NavLink className={styles.link} to={PAYMENT_ROUTE}>
              Оплата
            </NavLink> */}
          </Nav>
          <Nav className="ms-auto">
            <Link
              activeClass="active"
              to="contacts"
              spy={true}
              smooth={true}
              duration={500}
              className={styles.link}>
              Контакты
            </Link>
            <Link
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              duration={500}
              className={styles.link}>
              О нас
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
