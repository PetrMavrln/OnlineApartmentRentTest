import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink, useLocation } from 'react-router-dom';
import {
  // ABOUT_ROUTE,
  // APARTMENTS_ROUTE,
  // CONTACTS_ROUTE,
  MAIN_ROUTE,
  // PAYMENT_ROUTE,
  // SERVICES_ROUTE,
  SPECIAL_ROUTE,
  NEWS_ROUTE,
} from '../utils/consts';
import styles from '../css-modules/navbar.module.css';
import { Link } from 'react-scroll';

const NavBar = () => {
  let location = useLocation();

  return (
    <Navbar className={styles.wrapper} collapseOnSelect expand="lg" bg="transperent">
      <Container className={styles.container}>
        <NavLink className={styles.brand} to={MAIN_ROUTE}>
          kds
        </NavLink>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav>
            {location.pathname === '/' ? (
              <Link
                activeClass="active"
                to="services"
                spy={true}
                smooth={true}
                duration={300}
                className={styles.link}>
                Услуги
              </Link>
            ) : (
              <NavLink className={styles.link} to={MAIN_ROUTE}>
                Услуги
              </NavLink>
            )}
            {location.pathname === '/' ? (
              <Link
                activeClass="active"
                to="apartments"
                spy={true}
                smooth={true}
                duration={300}
                className={styles.link}>
                Апартаменты
              </Link>
            ) : (
              <NavLink className={styles.link} to={MAIN_ROUTE}>
                Апартаменты
              </NavLink>
            )}
            <NavLink className={styles.link} to={SPECIAL_ROUTE}>
              Спец. предложения
            </NavLink>
            <NavLink className={styles.link} to={NEWS_ROUTE}>
              Новости
            </NavLink>
            {/* <NavLink className={styles.link} to={PAYMENT_ROUTE}>
              Оплата
            </NavLink> */}
          </Nav>

          <Nav className="ms-auto">
            {location.pathname === '/' ? (
              <Link
                activeClass="active"
                to="contacts"
                spy={true}
                smooth={true}
                duration={500}
                className={styles.link}>
                Контакты
              </Link>
            ) : (
              <NavLink className={styles.link} to={MAIN_ROUTE}>
                Контакты
              </NavLink>
            )}
            {location.pathname === '/' ? (
              <Link
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                duration={500}
                className={styles.link}>
                О нас
              </Link>
            ) : (
              <NavLink className={styles.link} to={MAIN_ROUTE}>
                О нас
              </NavLink>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
