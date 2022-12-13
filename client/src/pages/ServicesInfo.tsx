import React, { useEffect } from 'react';
import Contacts from './Contacts';
import styles from '../css-modules/servicesInfoPage.module.css';
import { Container } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const ServicesInfo = () => {
  // -> scroll to top при переходе на страницу товара
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  // <-

  return (
    <Container className={styles.container}>
      <Helmet>
        <title>Оказание услуг</title>
        <meta name="description" content="Выберите удобный для вас метод получения услуги" />
      </Helmet>
      <h2 className={styles.header}>
        Для получения выбранной услуги свяжитесь с нами наиболее удобным для вас методом из
        представленных ниже
      </h2>
      <h5 className={styles.subHeader}>
        Звонок по номеру моб. телефона является предпочтительным метод связи
      </h5>
      <Contacts />
    </Container>
  );
};

export default ServicesInfo;
