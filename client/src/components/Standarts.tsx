import React, { useEffect } from 'react';
import { Container, Row, Spinner, Stack } from 'react-bootstrap';
import styles from '../css-modules/standarts.module.css';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { fetchStandarts } from '../store/reducers/ActionCreators';
import StandartsItem from './StandartsItem';

const Standarts = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchStandarts());
  }, []);

  const { standarts, isLoading } = useAppSelector((state) => state.standartReducer);

  return (
    <div className={styles.wrapper}>
      <Container className={styles.container}>
        <div className={styles.header}>
          <h2>У нас действет единый стандарт качества для апартаментов</h2>
          <h5>В каждой квартире есть:</h5>
        </div>
        {isLoading ? (
          <div className={styles.spinner}>
            <Spinner animation="grow" variant="info" />
          </div>
        ) : (
          <Stack direction="horizontal" className={styles.stack}>
            {standarts.map((standart) => (
              <StandartsItem key={standart.id} standart={standart} />
            ))}
          </Stack>
        )}
      </Container>
    </div>
  );
};

export default Standarts;
