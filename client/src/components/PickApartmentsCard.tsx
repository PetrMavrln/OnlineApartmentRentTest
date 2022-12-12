import { Card, Col, Image } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import styles from '../css-modules/pickApartmentsCard.module.css';
import { useAppDispatch } from '../hooks/redux';
import { IPickApartmentsCard } from '../models/IPickApartmentsCard';
import { fetchCardTitle } from '../store/reducers/ActionCreators';
import { APARTMENTS_ROUTE } from '../utils/consts';

const PickApartmentsCard = ({ card }: { card: IPickApartmentsCard }) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  return (
    <Col md={4} className={styles.col}>
      <Card
        className={styles.card}
        onClick={() => {
          dispatch(fetchCardTitle(card.title)); //сохраняю title в store
          navigate(APARTMENTS_ROUTE);
        }}>
        <Image
          className={styles.img}
          width={378}
          height={378}
          src={card.imgUrl}
          alt={`${card.title}`}></Image>
        <div className={styles.textBlock}>
          <h2 className={styles.title}>{card.title}</h2>
          <p className={styles.description}>{card.description}</p>
        </div>
      </Card>
    </Col>
  );
};

export default PickApartmentsCard;
