import { combineReducers, configureStore } from '@reduxjs/toolkit';
import apartmentReducer from '../store/reducers/ApartmentSlice';

const rootReducer = combineReducers({
  apartmentReducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
