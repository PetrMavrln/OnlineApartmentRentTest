import { Container, Row, Spinner } from 'react-bootstrap';
import styles from '../css-modules/apartments.module.css';
import { useAppSelector } from '../hooks/redux';
import ApartmentItem from './ApartmentItem';
import FiltersComponent from './FiltersComponent';

const ApartmentsList = () => {
  const { apartments, isLoading } = useAppSelector((state) => state.apartmentReducer);

  return (
    <div className={styles.wrapper}>
      <Container className={styles.container}>
        <FiltersComponent />
        <div>
          {isLoading ? (
            <div className={styles.spinner}>
              <Spinner animation="border" />
            </div>
          ) : (
            <Row className="d-flex">
              {apartments.map((apartment) => (
                <ApartmentItem key={apartment.id} apartment={apartment} />
              ))}
            </Row>
          )}
        </div>
      </Container>
    </div>
  );
};

export default ApartmentsList;
