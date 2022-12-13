import { combineReducers, configureStore } from '@reduxjs/toolkit';
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
import storage from 'redux-persist/lib/storage';
import apartmentReducer from '../store/reducers/ApartmentSlice';
import cardTitleReducer from '../store/reducers/CardTitleSlice';
import mainPageImgsReducer from '../store/reducers/MainPageImgsSlice';
import pickApartmentsReducer from '../store/reducers/PickApartmentsSlice';
import reviewReducer from '../store/reducers/ReviewSlice';
import serviceReducer from '../store/reducers/ServicesSlice';
import standartReducer from '../store/reducers/StandartsSlice';
import socialReducer from '../store/reducers/SocialsSlice';

const rootReducer = combineReducers({
  apartmentReducer,
  reviewReducer,
  cardTitleReducer,
  mainPageImgsReducer,
  pickApartmentsReducer,
  serviceReducer,
  standartReducer,
  socialReducer,
});

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  // reducer: rootReducer,
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
//TODO setupStore для получения type AppStore ниже, пока так.
const setupStore = () => {
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

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
