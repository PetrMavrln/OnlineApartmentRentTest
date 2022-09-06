import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import {
  ABOUT_ROUTE,
  APARTMENTS_ROUTE,
  CONTACTS_ROUTE,
  MAIN_ROUTE,
  PAYMENT_ROUTE,
  SERVICES_ROUTE,
} from '../utils/consts';
import styles from '../css-modules/navbar.module.css';

const NavBar = () => {
  return (
    <Navbar className={styles.navContainer} collapseOnSelect expand="lg" bg="transperent">
      <Container className="p-0">
        <NavLink className={styles.navBrand} to={MAIN_ROUTE}>
          kds
        </NavLink>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav>
            <NavLink className={styles.navLink} to={SERVICES_ROUTE}>
              Услуги
            </NavLink>
            <NavLink className={styles.navLink} to={APARTMENTS_ROUTE}>
              Апартаменты
            </NavLink>
            {/* <NavLink className={styles.navLink} to={PAYMENT_ROUTE}>
              Оплата
            </NavLink> */}
          </Nav>
          <Nav className="ms-auto">
            <NavLink className={styles.navLink} to={CONTACTS_ROUTE}>
              Контакты
            </NavLink>
            <NavLink className={styles.navLink} to={ABOUT_ROUTE}>
              О нас
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
