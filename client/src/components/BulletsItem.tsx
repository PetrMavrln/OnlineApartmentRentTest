import React from 'react';
import { Col, Image } from 'react-bootstrap';
import { IBullet } from '../models/IBullet';
import styles from '../css-modules/bulletsItem.module.css';

const BulletsItem = ({ bullet }: { bullet: IBullet }) => {
  return (
    <Col md={4} className={styles.col}>
      <div className={styles.card}>
        <Image
          className={styles.img}
          width={50}
          height={50}
          src={require('../' + bullet.img)}
          alt={`${bullet.title}`}></Image>
        <h2 className={styles.title}>{bullet.title}</h2>
        <p className={styles.description}>{bullet.description}</p>
      </div>
    </Col>
  );
};

export default BulletsItem;
