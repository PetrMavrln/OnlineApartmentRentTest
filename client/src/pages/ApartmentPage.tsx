import classNames from 'classnames';
import { useEffect } from 'react';
import { Button, Card, Carousel, Col, Container, Spinner, Stack } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import styles from '../css-modules/apartmentPage.module.css';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { fetchApartments } from '../store/reducers/ActionCreators';
import getFormatedText from '../utils/getFormatedText';

const ApartmentPage = () => {
  const leftApartmentPageCard = classNames(
    styles.apartmentPageCards,
    styles.firstApartmentPageCards,
  );

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchApartments());
  }, []);

  const { id = 1 } = useParams();

  const { apartments, isLoading } = useAppSelector((state) => state.apartmentReducer);
  const apartment = apartments[Number(id) - 1];

  return (
    <Container className={styles.apartmentPageContainer}>
      <Carousel className={styles.apartmentCarousel}>
        {apartment?.img.map((imgSrc) => (
          <Carousel.Item interval={3000} key={apartment.img.indexOf(imgSrc)}>
            <img
              className={styles.apartmentPageImg}
              src={require('../' + imgSrc)}
              alt="Фото квартиры"
            />
          </Carousel.Item>
        ))}
      </Carousel>
      <Stack direction="horizontal">
        <Col md={4} className={styles.apartCol}>
          <Card className={leftApartmentPageCard}>
            <span>
              {apartment?.title} <br />
              Комнат: {apartment?.rooms} <br />
              Площадь: {apartment?.square}
            </span>
            <Stack className={styles.apartmentCardBottom}>
              <span className={styles.apartmentPrice}>{apartment?.price} руб./сутки</span>
              <Button variant="dark">Бронировать</Button>
            </Stack>
          </Card>
        </Col>
        <Col md={8} className={styles.apartCol}>
          <Card className={styles.apartmentPageCards}>
            <h2>ОПИСАНИЕ</h2>
            <span className={styles.apartmentPageCardDescription}>
              {getFormatedText(apartment?.description)}
            </span>
          </Card>
        </Col>
      </Stack>
    </Container>
  );
};

export default ApartmentPage;
