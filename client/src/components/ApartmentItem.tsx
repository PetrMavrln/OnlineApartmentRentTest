import { Button, Card, Col, Stack } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import { useNavigate } from 'react-router-dom';
import styles from '../css-modules/apartmentItem.module.css';
import { IApartment } from '../models/IApartment';
import { APARTMENT_ROUTE } from '../utils/consts';

const ApartmentItem = ({ apartment }: { apartment: IApartment }) => {
  const navigate = useNavigate();

  return (
    <Col md={4} className={styles.col}>
      <Card
        className={styles.cardItem}
        onClick={() => navigate(APARTMENT_ROUTE + '/' + apartment.id)}>
        <b className={styles.cardTitle}>{apartment.title}</b>
        <Image
          className={styles.cardImg}
          // width={296}
          // height={153}
          src={require('../' + apartment?.img[apartment?.id])}
          alt="apartment img"></Image>
        <Stack direction="horizontal" className={styles.cardBottom}>
          <b>{'от ' + apartment.price + ' ₽ в сутки'}</b>
          <Button variant="dark" className={styles.cardBtn}>
            Подробнее
          </Button>
        </Stack>
        <Stack className={styles.cardItemInfoWrapper}>
          <span className={styles.cardItemInfo}>Комнат: {apartment.rooms}</span>
          {apartment.studioApartment === true ? (
            <span className={styles.cardItemInfo}>Студия</span>
          ) : (
            <span className={styles.cardItemInfo}></span>
          )}
          <span className={styles.cardItemInfo}>Площадь: {apartment.square}</span>
        </Stack>
      </Card>
    </Col>
  );
};

export default ApartmentItem;
