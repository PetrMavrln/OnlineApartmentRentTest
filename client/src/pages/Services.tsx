import { useEffect } from 'react';
import { Container, Spinner, Stack } from 'react-bootstrap';
import { Element } from 'react-scroll';
import ServiceCard from '../components/ServiceCard';
import styles from '../css-modules/servicesPage.module.css';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { fetchServices } from '../store/reducers/ActionCreators';

const Services = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchServices());
  }, []);

  const { services, isLoading } = useAppSelector((state) => state.serviceReducer);

  return (
    <Element name="services">
      <Container className={styles.container}>
        <h1 className={styles.header}>Наши услуги</h1>
        {isLoading ? (
          <div className={styles.spinner}>
            <Spinner animation="grow" variant="info" />
          </div>
        ) : (
          <Stack direction="horizontal" className={styles.cardsWrapper}>
            {services.map((service) => (
              <ServiceCard
                img={service.img}
                title={service.title}
                description={service.description}
                key={service.img} //key должен быть разный!
              />
            ))}
          </Stack>
        )}
      </Container>
    </Element>
  );
};

export default Services;
