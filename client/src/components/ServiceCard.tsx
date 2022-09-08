import React from 'react';
import { Card, Col, Image } from 'react-bootstrap';
import styles from '../css-modules/serviceCard.module.css';

const ServiceCard = ({
  img,
  title,
  description,
}: {
  img: string;
  title: string;
  description: string;
}) => {
  return (
    <Col md={4} className={styles.col}>
      <Card className={styles.card}>
        <Image
          className={styles.img}
          width={296}
          height={153}
          src={require('../' + img)}
          alt={`${title}`}></Image>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.description}>{description}</p>
      </Card>
    </Col>
  );
};

export default ServiceCard;
