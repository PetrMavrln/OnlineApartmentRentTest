import React, { useState } from 'react';
import { Container, Row, Stack } from 'react-bootstrap';
import ServiceCard from '../components/ServiceCard';
import styles from '../css-modules/servicesPage.module.css';
import { Element } from 'react-scroll';
import { InView } from 'react-intersection-observer';

const Services = () => {
  const services = [
    {
      img: 'assets/services/rentHouse.svg',
      title: 'Аренда',
      description: 'Возможность арендовать апартаменты, дом на определенный период времени',
    },
    {
      img: 'assets/services/buyHouse.svg',
      title: 'Покупка',
      description: 'Предложения по покупке апартаментов, домов, участков земли',
    },
    {
      img: 'assets/services/sellHouse.svg',
      title: 'Продажа',
      description: 'Продажа апартаментов, домов, участков земли в кротчайшие сроки',
    },
  ];

  return (
    <Element name="services">
      <Container className={styles.container}>
        <h1 className={styles.header}>Наши услуги</h1>
        <Stack direction="horizontal" className={styles.cardsWrapper}>
          {services.map((service) => (
            <ServiceCard
              img={service.img}
              title={service.title}
              description={service.description}
              key={service.img} //key должен быть разный!
            />
          ))}
        </Stack>
      </Container>
    </Element>
  );
};

export default Services;
