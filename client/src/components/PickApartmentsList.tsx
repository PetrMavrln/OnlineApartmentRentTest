import { Container, Stack } from 'react-bootstrap';
import styles from '../css-modules/pickApartmentsList.module.css';
import PickApartmentsCard from './PickApartmentsCard';
import { Element } from 'react-scroll';

const PickApartmentsList = () => {
  const pickApartments = [
    {
      id: 1,
      img: 'assets/apratmentsImgs/2/1.1.jpg',
      title: 'Кудрово',
      description:
        'Уютные однокомнатные квартиры с видом на лес. От метро до Дыбенко 15 мин пешком',
    },
    {
      id: 2,
      img: 'assets/apratmentsImgs/4/1.3.jpg',
      title: 'Мурино',
      description: 'описание',
    },
    {
      id: 3,
      img: 'assets/apratmentsImgs/7/1.2.jpg',
      title: 'Центральный р-н',
      description: 'описание',
    },
    {
      id: 4,
      img: 'assets/apratmentsImgs/5/1.3.jpg',
      title: 'Выборгский р-н',
      description: 'описание',
    },
    {
      id: 5,
      img: 'assets/apratmentsImgs/1/1.5.jpg',
      title: 'Курортный р-н',
      description: 'описание',
    },
    {
      id: 6,
      img: 'assets/apratmentsImgs/10/1.27.jpg',
      title: 'Загородные дома',
      description:
        'Современные загородные дома, укомплектованные всем необходимым для комфортного отдыха',
    },
  ];

  return (
    <Element name="apartments" id="apartments">
      <div className={styles.wrapper}>
        <Container className={styles.container}>
          <div className={styles.header}>
            <h2>Выберете подходящие вам апартаменты</h2>
          </div>
          <Stack direction="horizontal" className={styles.stack}>
            {pickApartments.map((card) => (
              <PickApartmentsCard key={card.id} card={card} />
            ))}
          </Stack>
        </Container>
      </div>
    </Element>
  );
};

export default PickApartmentsList;
