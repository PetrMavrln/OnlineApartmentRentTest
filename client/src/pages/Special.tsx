import React from 'react';
import { Helmet } from 'react-helmet';
import styles from '../css-modules/specialPage.module.css';

const Special = () => {
  return (
    // TODO сделать страницу
    <div className={styles.container}>
      <Helmet>
        <title>Специальные предложения</title>
        <meta
          name="description"
          content="Изучите специальные предложения, доступные в данный момент"
        />
      </Helmet>
      <div className={styles.header}>
        <h1>Страница в разработке</h1>
        <h2>мы работаем над интересными штуками</h2>
      </div>
    </div>
  );
};

export default Special;
