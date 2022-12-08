import { combineReducers, configureStore } from '@reduxjs/toolkit';
import apartmentReducer from '../store/reducers/ApartmentSlice';
import cardTitleReducer from '../store/reducers/CardTitleSlice';
import filteredApartmentsReducer from '../store/reducers/FilteredApartmentsSlice';
import reviewReducer from '../store/reducers/ReviewSlice';
import storage from 'redux-persist/lib/storage';
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
} from 'redux-persist';

const rootReducer = combineReducers({
  apartmentReducer,
  reviewReducer,
  cardTitleReducer,
  filteredApartmentsReducer,
});

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const setupStore = () => {
  return configureStore({
    // reducer: rootReducer,
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }),
  });
};

export const persistor = persistStore(setupStore());

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
