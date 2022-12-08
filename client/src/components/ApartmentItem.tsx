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
        <div className={styles.cardImgContainer}>
          <Image
            className={styles.cardImg}
            // width={296}
            // height={153}
            src={require('../' + apartment?.img[apartment?.id - apartment?.id + 1])} //TODO исправить эту шляпу
            alt="apartment img"></Image>
        </div>
        <Stack direction="horizontal" className={styles.cardBottom}>
          <b>{'от ' + apartment.price + ' ₽ в сутки'}</b>
          {/* <Button variant="dark" className={styles.cardBtn}>
            Подробнее
          </Button> */}
        </Stack>
        <Stack className={styles.cardItemInfoWrapper}>
          <span className={styles.cardItemInfo}>Комнат: {apartment.rooms}</span>
          {apartment.studioApartment === true ? (
            <span className={styles.cardItemInfo}>Студия</span>
          ) : (
            <span className={styles.cardItemInfo}></span>
          )}
          <span className={styles.cardItemInfo}>Площадь: {apartment.square}</span>
          <span className={styles.cardItemInfo}>Кол-во человек: {apartment.people}</span>
        </Stack>
      </Card>
    </Col>
  );
};

export default ApartmentItem;
