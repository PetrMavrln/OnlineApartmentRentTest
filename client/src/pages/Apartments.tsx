import { useEffect } from 'react';
import ApartmentsList from '../components/ApartmentsList';
import { useAppDispatch } from '../hooks/redux';
import { fetchApartments } from '../store/reducers/ActionCreators';
import { Element } from 'react-scroll';

const Apartments = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchApartments());
  }, []);

  return (
    <Element name="apartments">
      <ApartmentsList />;
    </Element>
  );
};

export default Apartments;
