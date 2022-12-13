import Bullets from '../components/Bullets';
import CarouselMain from '../components/CarouselMain';
import FooterComponent from '../components/FooterComponent';
import PickApartmentsList from '../components/PickApartmentsList';
import Standarts from '../components/Standarts';
import ScrollToTopBtn from '../components/UI/ScrollToTopBtn';
import styles from '../css-modules/mainPage.module.css';
import About from './About';
import Contacts from './Contacts';
import Services from './Services';

const Main = () => {
  return (
    <div className={styles.wrapper}>
      <CarouselMain />
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
