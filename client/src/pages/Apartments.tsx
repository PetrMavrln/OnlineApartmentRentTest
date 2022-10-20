import { useEffect } from 'react';
import { Element } from 'react-scroll';
import ApartmentsList from '../components/ApartmentsList';
import { useAppDispatch } from '../hooks/redux';
import { fetchApartments } from '../store/reducers/ActionCreators';

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
