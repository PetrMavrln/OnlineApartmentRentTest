import { useEffect } from 'react';
import ApartmentsList from '../components/ApartmentsList';
import { useAppDispatch } from '../hooks/redux';
import { fetchApartments } from '../store/reducers/ActionCreators';

const Apartments = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchApartments());
  }, []);

  return <ApartmentsList />;
};

export default Apartments;
