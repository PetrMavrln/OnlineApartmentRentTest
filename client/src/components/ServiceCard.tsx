import React from 'react';
import { Card, Col, Image } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import styles from '../css-modules/serviceCard.module.css';
import { SERVICES_INFO_ROUTE } from '../utils/consts';

const ServiceCard = ({
  img,
  title,
  description,
}: {
  img: string;
  title: string;
  description: string;
}) => {
  const navigate = useNavigate();
  //TODO почистить компонент
  const scrollToView = () => {
    const el = document.getElementById('apartments');
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Col md={4} className={styles.col}>
      <Card
        className={styles.card}
        onClick={() => {
          if (title === 'Аренда') {
            scrollToView();
          } else {
            navigate(SERVICES_INFO_ROUTE);
          }
        }}>
        <Image className={styles.img} width={153} height={153} src={img} alt={`${title}`}></Image>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.description}>{description}</p>
      </Card>
    </Col>
  );
};

export default ServiceCard;
