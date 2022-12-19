import { useEffect } from 'react';
import { Button, Card, Carousel, Col, Container, Spinner, Stack } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import ScrollToTopBtn from '../components/UI/ScrollToTopBtn';
import styles from '../css-modules/apartmentPage.module.css';
import { useAppSelector } from '../hooks/redux';
import { SERVICES_INFO_ROUTE } from '../utils/consts';
import getFormatedText from '../utils/getFormatedText';

const ApartmentPage = () => {
  const { id = 1 } = useParams();

  const { apartments, isLoading } = useAppSelector((state) => state.apartmentReducer);
  const apartment = apartments[Number(id) - 1];

  const navigate = useNavigate();
  // -> scroll to top при переходе на страницу товара
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  // <-
  return (
    <div>
      <Helmet>
        <title>Изучите выбранные апартаменты</title>
        <meta name="description" content="Изучите информацию о выбранных вами апартаментах" />
      </Helmet>
      {isLoading ? (
        <div className={styles.spinner}>
          <Spinner animation="grow" variant="info" />
        </div>
      ) : (
        <Carousel className={styles.carousel}>
          {apartment?.img.map((imgSrc) => (
            <Carousel.Item interval={3000} key={apartment.img.indexOf(imgSrc)}>
              <img className={styles.img} src={imgSrc} alt="Фото квартиры" />
            </Carousel.Item>
          ))}
        </Carousel>
      )}

      <Container className={styles.container}>
        <Stack direction="horizontal" className={styles.colContainer}>
          <Col md={4} className={styles.col}>
            <Card className={styles.card}>
              <div className={styles.cardInfo}>
                <h2 className={styles.header}>{apartment?.title}</h2> <br />
                <br />
                Адрес: {apartment?.address} <br />
                Комнат: {apartment?.rooms} <br />
                Площадь: {apartment?.square} <br />
                Количество человек: {apartment?.people} <br />
              </div>
              <Stack className={styles.cardBottom}>
                <span className={styles.price}>{apartment?.price} руб./сутки</span>
                <Button
                  variant="dark"
                  className={styles.cardBtn}
                  onClick={() => navigate(SERVICES_INFO_ROUTE)}>
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
