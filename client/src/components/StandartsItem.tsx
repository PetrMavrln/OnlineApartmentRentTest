import React from 'react';
import { Row, Image } from 'react-bootstrap';
import { IStandart } from '../models/IStandart';
import styles from '../css-modules/standartsItem.module.css';

const StandartsItem = ({ standart }: { standart: IStandart }) => {
  return (
    <Row className={styles.row}>
      <div className={styles.card}>
        <Image
          className={styles.img}
          width={40}
          height={40}
          src={require('../' + standart.img)}
          alt={`${standart.title}`}></Image>
        <h4 className={styles.title}>{standart.title}</h4>
      </div>
    </Row>
  );
};

export default StandartsItem;
