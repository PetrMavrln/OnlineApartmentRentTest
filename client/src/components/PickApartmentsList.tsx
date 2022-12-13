import { useEffect } from 'react';
import { Container, Spinner, Stack } from 'react-bootstrap';
import { Element } from 'react-scroll';
import styles from '../css-modules/pickApartmentsList.module.css';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { fetchPickApartments } from '../store/reducers/ActionCreators';
import PickApartmentsCard from './PickApartmentsCard';

const PickApartmentsList = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchPickApartments());
  }, []);

  const { pickApartments, isLoading } = useAppSelector((state) => state.pickApartmentsReducer);

  return (
    <Element name="apartments" id="apartments">
      <div className={styles.wrapper}>
        <Container className={styles.container}>
          <div className={styles.header}>
            <h2>Выберете подходящие вам апартаменты</h2>
          </div>
          {isLoading ? (
            <div className={styles.spinner}>
              <Spinner animation="grow" variant="info" />
            </div>
          ) : (
            <Stack direction="horizontal" className={styles.stack}>
              {pickApartments.map((card) => (
                <PickApartmentsCard key={card.id} card={card} />
              ))}
            </Stack>
          )}
        </Container>
      </div>
    </Element>
  );
};

export default PickApartmentsList;
