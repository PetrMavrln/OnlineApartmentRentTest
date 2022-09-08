import classNames from 'classnames';
import React from 'react';
import { Container, Navbar } from 'react-bootstrap';
import styles from '../css-modules/footer.module.css';

const FooterComponent = () => {
  let linkOne = classNames(styles.linkLeft, styles.link);
  let linkTwo = classNames(styles.linkRight, styles.link);

  return (
    <Navbar className={styles.wrapper} bg="transperent">
      <Container className="p-0">
        <a className={linkOne} href="tel:+79063111825">
          +7 906 311 18 25{' '}
        </a>
        <a className={linkTwo} href="tel:+79111414714">
          +7 911 141 47 14
        </a>
      </Container>
    </Navbar>
  );
};

export default FooterComponent;
