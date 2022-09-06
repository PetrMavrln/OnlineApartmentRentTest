import axios from 'axios';
import { IApartment } from '../../models/IApartment';
import { AppDispatch } from '../store';
import { apartmentSlice } from './ApartmentSlice';

export const fetchApartments = () => async (dispatch: AppDispatch) => {
  let url =
    'https://raw.githubusercontent.com/PetrMavrln/OnlineApartmentRentTest/main/apartments.json';
  try {
    dispatch(apartmentSlice.actions.apartmentsFetching());
    const response = await axios.get<IApartment[]>(url);
    dispatch(apartmentSlice.actions.apartmentsFetchingSuccess(response.data));
  } catch (e: any) {
    dispatch(apartmentSlice.actions.apartmentsFetchingError(e.message));
  }
};
