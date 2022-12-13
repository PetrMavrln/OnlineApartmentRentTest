import React from 'react';
import { Helmet } from 'react-helmet';
import styles from '../css-modules/servicesPage.module.css';

const Payment = () => {
  return (
    // TODO сделать страницу
    <div className={styles.servicesPage}>
      <Helmet>
        <title>Страница оплаты</title>
        <meta name="description" content="Произведите оплату" />
      </Helmet>
      <div className={styles.servicesHeader}>
        <h1>Страница в разработке</h1>
        <h2>мы работаем над интересными штуками</h2>
      </div>
    </div>
  );
};

export default Payment;
