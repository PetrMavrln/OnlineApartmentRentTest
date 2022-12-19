import React from 'react';
import { Container, Row } from 'react-bootstrap';
import BulletsItem from './BulletsItem';
import styles from '../css-modules/bullets.module.css';

const Bullets = () => {
  const bulletsArr = [
    {
      id: 1,
      img: 'assets/ratingStar.svg',
      title: 'Средний рейтинг Авито - 5',
      description: 'На основе более 50 отзывов',
    },
    {
      id: 2,
      img: 'assets/location.svg',
      title: 'Удобное расположение',
      description:
        'Дома и квартиры расположены в центе, а также в курортных и исторических районах',
    },
    {
      id: 3,
      img: 'assets/design.svg',
      title: 'Продуманный дизайн',
      description: 'Мы постарались сделать все максимально удорбным для вас',
    },
  ];
  return (
    <div className={styles.wrapper}>
      <Container className={styles.container}>
        <Row className={styles.row}>
          {bulletsArr.map((bullet) => (
            <BulletsItem key={bullet.id} bullet={bullet} />
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Bullets;
