import { useEffect } from 'react';
import { Card, Col, Image } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import styles from '../css-modules/pickApartmentsCard.module.css';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { IPickApartmentsCard } from '../models/IPickApartmentsCard';
import { fetchCardTitle, fetchFilteredApartments } from '../store/reducers/ActionCreators';
import { APARTMENTS_ROUTE } from '../utils/consts';

const PickApartmentsCard = ({ apartment }: { apartment: IPickApartmentsCard }) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  return (
    <Col md={4} className={styles.col}>
      <Card
        className={styles.card}
        onClick={() => {
          dispatch(fetchCardTitle(apartment.title)); //сохраняю title в store
          navigate(APARTMENTS_ROUTE);
        }}>
        <Image
          className={styles.img}
          width={378}
          height={378}
          src={require('../' + apartment.img)}
          alt={`${apartment.title}`}></Image>
        <div className={styles.textBlock}>
          <h2 className={styles.title}>{apartment.title}</h2>
          <p className={styles.description}>{apartment.description}</p>
        </div>
      </Card>
    </Col>
  );
};

export default PickApartmentsCard;
