import { combineReducers, configureStore } from '@reduxjs/toolkit';
import apartmentReducer from '../store/reducers/ApartmentSlice';
import reviewReducer from '../store/reducers/ReviewSlice';

const rootReducer = combineReducers({
  apartmentReducer,
  reviewReducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
