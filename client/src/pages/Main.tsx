import classNames from 'classnames';
import { useEffect } from 'react';
import { Carousel, Spinner } from 'react-bootstrap';
import Bullets from '../components/Bullets';
import FooterComponent from '../components/FooterComponent';
import PickApartmentsList from '../components/PickApartmentsList';
import Standarts from '../components/Standarts';
import ScrollToTopBtn from '../components/UI/ScrollToTopBtn';
import styles from '../css-modules/mainPage.module.css';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { fetchMainPageImgs } from '../store/reducers/ActionCreators';
import About from './About';
import Contacts from './Contacts';
import Services from './Services';

const Main = () => {
  let bgImgComb = classNames('d-block', styles.carouselImg);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchMainPageImgs());
  }, []);

  const { mainPageImgs, isLoading } = useAppSelector((state) => state.mainPageImgsReducer);

  return (
    <div className={styles.wrapper}>
      {isLoading ? (
        <div className={styles.spinner}>
          <Spinner animation="grow" variant="info" />
        </div>
      ) : (
        <Carousel indicators={false}>
          {mainPageImgs.map((mainPageImg) => (
            <Carousel.Item interval={3000} key={mainPageImg.id}>
              <img className={bgImgComb} src={mainPageImg.imgUrl} alt="Фото на главной" />
            </Carousel.Item>
          ))}
        </Carousel>
      )}
      <div className={styles.headerContainer}>
        <h1 className={styles.header}>КакДляСебя</h1>
        <h2 className={styles.subHeader}>посуточная сдача квартир</h2>
      </div>
      <FooterComponent />
      <Bullets />
      <Standarts />
      <Services />
      <PickApartmentsList />
      {/* <Apartments /> */}
      <Contacts />
      <About />
      <ScrollToTopBtn />
    </div>
  );
};

export default Main;
