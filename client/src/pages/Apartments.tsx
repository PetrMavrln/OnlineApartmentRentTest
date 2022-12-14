import { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useLocation } from 'react-router-dom';
import { Element } from 'react-scroll';
import ApartmentsList from '../components/ApartmentsList';
import { useAppDispatch } from '../hooks/redux';
import { fetchApartments } from '../store/reducers/ActionCreators';

const Apartments = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchApartments());
  }, []);

  // -> scroll to top при переходе на страницу товара
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  // <-

  return (
    <Element name="apartments">
      <Helmet>
        <title>Выберите апартаменты</title>
        <meta name="description" content="Выберите подходящие для вас апартаменты" />
      </Helmet>
      <ApartmentsList />;
    </Element>
  );
};

export default Apartments;
