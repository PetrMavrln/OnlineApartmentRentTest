import classNames from 'classnames';
import React from 'react';
import { Container, Navbar } from 'react-bootstrap';
import styles from '../css-modules/footer.module.css';

const FooterComponent = () => {
  let footerLeft = classNames(styles.footerLeft, styles.footer);
  let footerRight = classNames(styles.footerRight, styles.footer);

  return (
    <Navbar className={styles.footerPosCorrect} bg="transperent">
      <Container className="p-0">
        <a className={footerLeft} href="tel:+79063111825">
          +7 906 311 18 25{' '}
        </a>
        <a className={footerRight} href="tel:+79111414714">
          +7 911 141 47 14
        </a>
      </Container>
    </Navbar>
  );
};

export default FooterComponent;
