import axios from 'axios';
import { IApartment } from '../../models/IApartment';
import { IMainPageImgs } from '../../models/IMainPageImg';
import { IPickApartmentsCard } from '../../models/IPickApartmentsCard';
import { IReview } from '../../models/IReview';
import { IService } from '../../models/IService';
import { ISocial } from '../../models/ISocial';
import { IStandart } from '../../models/IStandart';
import { AppDispatch } from '../store';
import { apartmentSlice } from './ApartmentSlice';
import { cardTitleSlice } from './CardTitleSlice';
import { mainPageImgsSlice } from './MainPageImgsSlice';
import { pickApartmentsSlice } from './PickApartmentsSlice';
import { reviewSlice } from './ReviewSlice';
import { serviceSlice } from './ServicesSlice';
import { socialSlice } from './SocialsSlice';
import { standartSlice } from './StandartsSlice';

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

export const fetchMainPageImgs = () => async (dispatch: AppDispatch) => {
  let url =
    'https://raw.githubusercontent.com/PetrMavrln/OnlineApartmentRentTest/main/mainPageImgs.json';
  try {
    dispatch(mainPageImgsSlice.actions.mainPageImgsFetching());
    const response = await axios.get<IMainPageImgs[]>(url);
    dispatch(mainPageImgsSlice.actions.mainPageImgsFetchingSuccess(response.data));
  } catch (e: any) {
    dispatch(mainPageImgsSlice.actions.mainPageImgsFetchingError(e.message));
  }
};

export const fetchPickApartments = () => async (dispatch: AppDispatch) => {
  let url =
    'https://raw.githubusercontent.com/PetrMavrln/OnlineApartmentRentTest/main/pickApartments.json';
  try {
    dispatch(pickApartmentsSlice.actions.pickApartmentsFetching());
    const response = await axios.get<IPickApartmentsCard[]>(url);
    dispatch(pickApartmentsSlice.actions.pickApartmentsFetchingSuccess(response.data));
  } catch (e: any) {
    dispatch(pickApartmentsSlice.actions.pickApartmentsFetchingError(e.message));
  }
};

export const fetchServices = () => async (dispatch: AppDispatch) => {
  let url =
    'https://raw.githubusercontent.com/PetrMavrln/OnlineApartmentRentTest/main/services.json';
  try {
    dispatch(serviceSlice.actions.serviceFetching());
    const response = await axios.get<IService[]>(url);
    dispatch(serviceSlice.actions.serviceFetchingSuccess(response.data));
  } catch (e: any) {
    dispatch(serviceSlice.actions.serviceFetchingError(e.message));
  }
};

export const fetchStandarts = () => async (dispatch: AppDispatch) => {
  let url =
    'https://raw.githubusercontent.com/PetrMavrln/OnlineApartmentRentTest/main/standarts.json';
  try {
    dispatch(standartSlice.actions.standartFetching());
    const response = await axios.get<IStandart[]>(url);
    dispatch(standartSlice.actions.standartFetchingSuccess(response.data));
  } catch (e: any) {
    dispatch(standartSlice.actions.standartFetchingError(e.message));
  }
};

export const fetchSocials = () => async (dispatch: AppDispatch) => {
  let url =
    'https://raw.githubusercontent.com/PetrMavrln/OnlineApartmentRentTest/main/socials.json';
  try {
    dispatch(socialSlice.actions.socialFetching());
    const response = await axios.get<ISocial[]>(url);
    dispatch(socialSlice.actions.socialFetchingSuccess(response.data));
  } catch (e: any) {
    dispatch(socialSlice.actions.socialFetchingError(e.message));
  }
};

export const fetchCardTitle = (title: string) => (dispatch: AppDispatch) => {
  dispatch(cardTitleSlice.actions.getCardTitleSuccess(title));
};
