import { useEffect } from 'react';
import { Carousel, Container, Spinner, Stack } from 'react-bootstrap';
import { Element } from 'react-scroll';
import logo from '../assets/logo.png';
import styles from '../css-modules/about.module.css';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { IReview } from '../models/IReview';
import { fetchReviews } from '../store/reducers/ActionCreators';

const About = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchReviews());
  }, []);

  const { reviews, isLoading } = useAppSelector((state) => state.reviewReducer);

  return (
    <Element name="about">
      <Container className={styles.container}>
        <h2 className={styles.header}>О нас</h2>
        <Stack direction="horizontal" className={styles.info}>
          <img
            className={styles.logo}
            src={logo}
            width="300px"
            height="285px"
            alt="КакДляСебя"></img>
          <p className={styles.text}>
            Как Для Себя - это удобные и современные квартиры, качественный сервис, надежность и
            привлекательные цены. Любая форма оплаты. Бронируйте с комфортом, бронируйте безопасно!
          </p>
        </Stack>
        {/* TODO прикрутить подгрузку отзывов */}
        <h2 className={styles.review}>Отзывы</h2>
        {isLoading ? (
          <div className={styles.spinner}>
            <Spinner animation="grow" variant="info" />
            {/* TODO центрировать спинер */}
          </div>
        ) : (
          <Carousel variant="dark" indicators={false} className={styles.reviewCarousel}>
            {reviews?.map((review: IReview) => (
              <Carousel.Item key={review.id}>
                {review.img === '' ? (
                  <img
                    src={
                      'https://raw.githubusercontent.com/PetrMavrln/OnlineApartmentRentTest/main/assets/reviews/anonymous.svg'
                    }
                    alt="Фото пользователя"></img>
                ) : (
                  <img src={review.img} alt="Фото пользователя"></img>
                )}
                <h3>{review.title}</h3>
                <p>{review.description}</p>
              </Carousel.Item>
            ))}
          </Carousel>
        )}
      </Container>
    </Element>
  );
};

export default About;
