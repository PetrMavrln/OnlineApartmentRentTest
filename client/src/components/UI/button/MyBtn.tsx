import React from 'react';
import { Button } from 'react-bootstrap';
import styles from '../button/MyBtn.module.css';

const MyBtn = (props: any) => {
  return (
    <Button variant="dark" className={styles.myBtn}>
      {props.text}
    </Button>
  );
};

export default MyBtn;
