import React from 'react';
import { Container, Row, Stack } from 'react-bootstrap';
import styles from '../css-modules/standarts.module.css';
import StandartsItem from './StandartsItem';

const Standarts = () => {
  const standarts = [
    {
      id: 1,
      img: 'assets/standarts/kitchen.svg',
      title: 'Кухня',
    },
    {
      id: 2,
      img: 'assets/standarts/bed.svg',
      title: 'Большая кровать',
    },
    {
      id: 3,
      img: 'assets/standarts/cosmetics.svg',
      title: 'Комплект косметических принадлежностей',
    },
    {
      id: 4,
      img: 'assets/standarts/hairDryer.svg',
      title: 'Фен и гладильные принадлежности',
    },
    {
      id: 5,
      img: 'assets/standarts/wifi.svg',
      title: 'Бесплатный Wi-Fi',
    },
    {
      id: 6,
      img: 'assets/standarts/bathroom.svg',
      title: 'Ванная комната',
    },
  ];

  return (
    <div className={styles.wrapper}>
      <Container className={styles.container}>
        <div className={styles.header}>
          <h2>У нас действет единый стандарт качества для апартаментов</h2>
          <h5>В каждой квартире есть:</h5>
        </div>
        <Stack direction="horizontal" className={styles.stack}>
          {standarts.map((standart) => (
            <StandartsItem key={standart.id} standart={standart} />
          ))}
        </Stack>
      </Container>
    </div>
  );
};

export default Standarts;
