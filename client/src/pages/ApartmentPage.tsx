import classNames from 'classnames';
import { useEffect } from 'react';
import { Button, Card, Carousel, Col, Container, Spinner, Stack } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import styles from '../css-modules/apartmentPage.module.css';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { fetchApartments } from '../store/reducers/ActionCreators';
import getFormatedText from '../utils/getFormatedText';

const ApartmentPage = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchApartments());
  }, []);

  const { id = 1 } = useParams();

  const { apartments, isLoading } = useAppSelector((state) => state.apartmentReducer);
  const apartment = apartments[Number(id) - 1];

  return (
    <Container className={styles.container}>
      <Carousel>
        {apartment?.img.map((imgSrc) => (
          <Carousel.Item interval={3000} key={apartment.img.indexOf(imgSrc)}>
            <img className={styles.img} src={require('../' + imgSrc)} alt="Фото квартиры" />
          </Carousel.Item>
        ))}
      </Carousel>

      <Stack direction="horizontal">
        <Col md={4} className={styles.col}>
          <Card className={styles.card}>
            <span>
              {apartment?.title} <br />
              Комнат: {apartment?.rooms} <br />
              Площадь: {apartment?.square}
            </span>
            <Stack className={styles.cardBottom}>
              <span className={styles.price}>{apartment?.price} руб./сутки</span>
              <Button variant="dark" className={styles.cardBtn}>
                Бронировать
              </Button>
            </Stack>
          </Card>
        </Col>

        <Col md={8} className={styles.apartCol}>
          <Card className={styles.card}>
            <h2 className={styles.header}>ОПИСАНИЕ</h2>
            <span className={styles.cardDescription}>
              {getFormatedText(apartment?.description)}
            </span>
          </Card>
        </Col>
      </Stack>
    </Container>
  );
};

export default ApartmentPage;
