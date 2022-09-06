import About from './pages/About';
import ApartmentPage from './pages/ApartmentPage';
import Apartments from './pages/Apartments';
import Contacts from './pages/Contacts';
import Main from './pages/Main';
import Payment from './pages/Payment';
import Services from './pages/Services';
import {
  ABOUT_ROUTE,
  APARTMENTS_ROUTE,
  APARTMENT_ROUTE,
  CONTACTS_ROUTE,
  MAIN_ROUTE,
  PAYMENT_ROUTE,
  SERVICES_ROUTE,
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
];
