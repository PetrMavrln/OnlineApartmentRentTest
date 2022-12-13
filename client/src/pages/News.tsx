import React from 'react';
import { Helmet } from 'react-helmet';
import styles from '../css-modules/specialPage.module.css';

const News = () => {
  return (
    // TODO сделать страницу
    <div className={styles.container}>
      <Helmet>
        <title>Новости</title>
        <meta name="description" content="Изучите последние новости" />
      </Helmet>
      <div className={styles.header}>
        <h1>Страница в разработке</h1>
        <h2>мы работаем над интересными штуками</h2>
      </div>
    </div>
  );
};

export default News;
