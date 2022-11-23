import axios from 'axios';
import { idText } from 'typescript';
import { IApartment } from '../../models/IApartment';
import { IReview } from '../../models/IReview';
import { AppDispatch } from '../store';
import { apartmentSlice } from './ApartmentSlice';
import { cardTitleSlice } from './CardTitleSlice';
import { filteredApartmentsSlice } from './FilteredApartmentsSlice';
import { reviewSlice } from './ReviewSlice';

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

export const fetchReviews = () => async (dispatch: AppDispatch) => {
  let url =
    'https://raw.githubusercontent.com/PetrMavrln/OnlineApartmentRentTest/main/reviews.json';
  try {
    dispatch(reviewSlice.actions.reviewsFetching());
    const response = await axios.get<IReview[]>(url);
    dispatch(reviewSlice.actions.reviewsFetchingSuccess(response.data));
  } catch (e: any) {
    dispatch(reviewSlice.actions.reviewsFetchingError(e.message));
  }
};

export const fetchCardTitle = (title: string) => (dispatch: AppDispatch) => {
  dispatch(cardTitleSlice.actions.getCardTitleSuccess(title));
};

export const fetchFilteredApartments = (arr: IApartment[]) => (dispatch: AppDispatch) => {
  dispatch(filteredApartmentsSlice.actions.getFilteredApartments(arr));
};
