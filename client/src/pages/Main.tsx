import classNames from 'classnames';
import { Carousel } from 'react-bootstrap';
import img1 from '../assets/mainPageImgs/mainImg1.jpg';
import img2 from '../assets/mainPageImgs/mainImg2.jpg';
import img3 from '../assets/mainPageImgs/mainImg3.jpg';
import img4 from '../assets/mainPageImgs/mainImg4.jpg';
import img5 from '../assets/mainPageImgs/mainImg5.jpg';
import img6 from '../assets/mainPageImgs/mainImg6.jpg';
import img7 from '../assets/mainPageImgs/mainImg7.jpg';
import img8 from '../assets/mainPageImgs/mainImg8.jpg';
import img9 from '../assets/mainPageImgs/mainImg9.jpg';
import FooterComponent from '../components/FooterComponent';
import styles from '../css-modules/mainPage.module.css';
import About from './About';
import Apartments from './Apartments';
import Contacts from './Contacts';
import Services from './Services';

const Main = () => {
  let bgImgComb = classNames('d-block', styles.carouselImg);

  return (
    // TODO сделать компонент с каруселью
    <div className={styles.wrapper}>
      <Carousel indicators={false}>
        <Carousel.Item interval={3000}>
          <img className={bgImgComb} src={img1} alt="Первый слайд" />
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <img className={bgImgComb} src={img2} alt="Второй слайд" />
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <img className={bgImgComb} src={img3} alt="Третий слайд" />
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <img className={bgImgComb} src={img4} alt="Четвертый слайд" />
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <img className={bgImgComb} src={img5} alt="Пятый слайд" />
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <img className={bgImgComb} src={img6} alt="Шестой слайд" />
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <img className={bgImgComb} src={img7} alt="Седьмой слайд" />
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <img className={bgImgComb} src={img8} alt="Восьмой слайд" />
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <img className={bgImgComb} src={img9} alt="Девятый слайд" />
        </Carousel.Item>
      </Carousel>
      <div className={styles.headerContainer}>
        <h1 className={styles.header}>КакДляСебя</h1>
        <h2 className={styles.subHeader}>посуточная сдача квартир</h2>
      </div>
      <FooterComponent />
      {/* <Services />
      <Apartments />
      <Contacts />
      <About /> */}
    </div>
  );
};

export default Main;
