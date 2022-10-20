import About from './pages/About';
import ApartmentPage from './pages/ApartmentPage';
import Apartments from './pages/Apartments';
import Contacts from './pages/Contacts';
import Main from './pages/Main';
import News from './pages/News';
import Payment from './pages/Payment';
import Services from './pages/Services';
import Special from './pages/Special';
import {
  ABOUT_ROUTE,
  APARTMENTS_ROUTE,
  APARTMENT_ROUTE,
  CONTACTS_ROUTE,
  MAIN_ROUTE,
  NEWS_ROUTE,
  PAYMENT_ROUTE,
  SERVICES_ROUTE,
  SPECIAL_ROUTE,
} from './utils/consts';

export const publicRoutes = [
  {
    path: ABOUT_ROUTE,
    Component: About,
  },
  {
    path: APARTMENT_ROUTE + '/:id',
    Component: ApartmentPage,
  },
  {
    path: APARTMENTS_ROUTE,
    Component: Apartments,
  },
  {
    path: CONTACTS_ROUTE,
    Component: Contacts,
  },
  {
    path: MAIN_ROUTE,
    Component: Main,
  },
  {
    path: PAYMENT_ROUTE,
    Component: Payment,
  },
  {
    path: SERVICES_ROUTE,
    Component: Services,
  },
  {
    path: SPECIAL_ROUTE,
    Component: Special,
  },
  {
    path: NEWS_ROUTE,
    Component: News,
  },
];
