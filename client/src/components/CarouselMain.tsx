import classNames from 'classnames';
import React, { useEffect } from 'react';
import { Carousel, Spinner } from 'react-bootstrap';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { fetchMainPageImgs } from '../store/reducers/ActionCreators';
import styles from '../css-modules/mainPage.module.css';

const CarouselMain = () => {
  let bgImgComb = classNames('d-block', styles.carouselImg);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchMainPageImgs());
  }, []);

  const { mainPageImgs, isLoading } = useAppSelector((state) => state.mainPageImgsReducer);

  // localStorage.setItem('mainPageImgs', JSON.stringify(mainPageImgs));

  return (
    <div>
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
    </div>
  );
};

export default CarouselMain;
