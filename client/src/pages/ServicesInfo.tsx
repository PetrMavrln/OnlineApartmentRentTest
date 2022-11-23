import React from 'react';
import Contacts from './Contacts';
import styles from '../css-modules/servicesInfoPage.module.css';
import { Container } from 'react-bootstrap';

const ServicesInfo = () => {
  return (
    <Container className={styles.container}>
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
