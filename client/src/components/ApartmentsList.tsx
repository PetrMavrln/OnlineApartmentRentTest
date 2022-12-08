import { useEffect } from 'react';
import { Container, Row, Spinner } from 'react-bootstrap';
import styles from '../css-modules/apartments.module.css';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { fetchFilteredApartments } from '../store/reducers/ActionCreators';
import ApartmentItem from './ApartmentItem';

const ApartmentsList = () => {
  const dispatch = useAppDispatch();
  const { apartments, isLoading } = useAppSelector((state) => state.apartmentReducer);
  const cardTitle = useAppSelector((state) => state.cardTitleReducer.title); //достаю title из storage

  const filtered = apartments.filter((apart) => apart.locationForFilter === cardTitle); //фильтрую массив по title

  useEffect(() => {
    dispatch(fetchFilteredApartments(filtered));
  }, []);

  // const { filteredApartments } = useAppSelector((state) => state.filteredApartmentsReducer);
  // console.log(filteredApartments);

  return (
    <Container className={styles.container}>
      {/* <FiltersComponent /> */}
      <h2 className={styles.header}>Доступные апартаменыт в категории "{cardTitle}"</h2>
      <div>
        {isLoading ? (
          <div className={styles.spinner}>
            <Spinner animation="border" />
          </div>
        ) : (
          <Row className={styles.row}>
            {filtered?.map((apartment) => (
              <ApartmentItem key={apartment.id} apartment={apartment} />
            ))}
          </Row>
        )}
      </div>
    </Container>
  );
};

export default ApartmentsList;
