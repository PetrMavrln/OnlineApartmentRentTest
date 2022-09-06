import { Container, Row, Spinner } from 'react-bootstrap';
import styles from '../css-modules/apartments.module.css';
import { useAppSelector } from '../hooks/redux';
import ApartmentItem from './ApartmentItem';
import FiltersComponent from './FiltersComponent';

const ApartmentsList = () => {
    const { apartments, isLoading } = useAppSelector(state => state.apartmentReducer)

    return (
        <Container className={styles.container}>
            <div className={styles.apartmentsContainer}>
                <FiltersComponent />
                <div>
                    {isLoading ?
                        <div className={styles.spinner}>
                            <Spinner animation="border" />
                        </div>
                        :
                        <Row className='d-flex'>
                            {apartments.map(apartment =>
                                <ApartmentItem key={apartment.id} apartment={apartment} />
                            )}
                        </Row>
                    }

                </div>
            </div>
        </Container>

    );
};

export default ApartmentsList;