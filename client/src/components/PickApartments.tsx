import React from 'react';
import { Container } from 'react-bootstrap';
import styles from '../css-modules/pickApartments.module.css';

const PickApartments = () => {
  return (
    <div className={styles.wrapper}>
      <Container className={styles.container}>
        <div className={styles.header}>
          <h2>Выберете подходящие вам апартаменты</h2>
        </div>
        {/* <Stack direction="horizontal" className={styles.stack}>
          {standarts.map((standart) => (
            <StandartsItem key={standart.id} standart={standart} />
          ))}
        </Stack> */}
      </Container>
    </div>
  );
};

export default PickApartments;
