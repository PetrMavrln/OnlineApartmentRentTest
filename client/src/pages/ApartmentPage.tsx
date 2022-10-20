import { useEffect } from 'react';
import { Button, Card, Carousel, Col, Container, Stack } from 'react-bootstrap';
import { useLocation, useParams } from 'react-router-dom';
import ScrollToTopBtn from '../components/UI/ScrollToTopBtn';
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

  // -> scroll to top при переходе на страницу товара
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  // <-
  return (
    <div>
      <Carousel className={styles.carousel}>
        {apartment?.img.map((imgSrc) => (
          <Carousel.Item interval={3000} key={apartment.img.indexOf(imgSrc)}>
            <img className={styles.img} src={require('../' + imgSrc)} alt="Фото квартиры" />
          </Carousel.Item>
        ))}
      </Carousel>
      <Container className={styles.container}>
        <Stack direction="horizontal">
          <Col md={4} className={styles.col}>
            <Card className={styles.card}>
              <div className={styles.cardInfo}>
                {apartment?.title} <br />
                Комнат: {apartment?.rooms} <br />
                Площадь: {apartment?.square} <br />
                Количество человек: *нужно добавить* Адрес: *нужно добавить* <br />
              </div>
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
              <div className={styles.cardDescription}>
                <h2 className={styles.header}>ОПИСАНИЕ</h2>
                <span className={styles.description}>
                  {getFormatedText(apartment?.description)}
                </span>
              </div>
            </Card>
          </Col>
        </Stack>
        <ScrollToTopBtn />
      </Container>
    </div>
  );
};

export default ApartmentPage;
