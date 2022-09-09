import { useEffect } from 'react';
import { Carousel, Container, Spinner, Stack } from 'react-bootstrap';
import logo from '../assets/logo.png';
import styles from '../css-modules/about.module.css';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { IReview } from '../models/IReview';
import { fetchReviews } from '../store/reducers/ActionCreators';
import anonymous from '../assets/reviews/anonymous.svg';

const About = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchReviews());
  }, []);

  const { reviews, isLoading } = useAppSelector((state) => state.reviewReducer);

  return (
    <Container className={styles.container}>
      <h1 className={styles.header}>О нас</h1>
      <Stack direction="horizontal" className={styles.info}>
        <img src={logo} width="300px" height="285px" alt="КакДляСебя"></img>
        <p className={styles.text}>
          Как Для Себя - это удобные и современные квартиры, качественный сервис, надежность и
          привлекательные цены. Любая форма оплаты. Бронируйте с комфортом, бронируйте безопасно!
        </p>
      </Stack>
      {/* TODO прикрутить подгрузку отзывов */}
      <h2 className={styles.review}>Отзывы</h2>
      {isLoading ? (
        <div className={styles.spinner}>
          <Spinner animation="border" />
        </div>
      ) : (
        <Carousel variant="dark" indicators={false} className={styles.reviewCarousel}>
          {reviews?.map((review: IReview) => (
            <Carousel.Item key={review.id}>
              {review.img === '' ? (
                <img src={anonymous} alt="Фото пользователя"></img>
              ) : (
                <img src={require('../' + review.img)} alt="Фото пользователя"></img>
              )}
              <h5>{review.title}</h5>
              <p>{review.description}</p>
            </Carousel.Item>
          ))}
          {/* <Carousel.Item>
          <img src={require('../assets/reviewImg.jpg')} alt="Фото автора отзыва"></img>
          <h5>Евгения</h5>
          <p>
            Квартира, чистая с хорошим ремонтом и всем не обходимым для проживания. Очень тихо и
            спокойно, замечательный и очень удобный матрац и хорошие шторы, спать хорошо. На кухне
            посуды достаточно, не хватало крышки на сковороду и духовки, но пару дней можно
            обойтись. В ванной все есть, разные мелочи приятная забота. Белые полотенца это красиво
            и здорово, но они одинаковые, постоянно путали( проживали летом на улице было +30 в
            квартире было прохладно и очень комфортно, единственное холодный пол, тапочки были бы
            приятным бонусом. а в остальном Спасибо огромное гостеприимство, было уютно и комфортно
            проживать.
          </p>
        </Carousel.Item> */}
        </Carousel>
      )}
    </Container>
  );
};

export default About;
