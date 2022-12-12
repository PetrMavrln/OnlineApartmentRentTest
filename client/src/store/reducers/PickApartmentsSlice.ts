import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IPickApartmentsCard } from '../../models/IPickApartmentsCard';

interface PickApartmentsState {
  pickApartments: IPickApartmentsCard[];
  isLoading: boolean;
  error: string;
}

const initialState: PickApartmentsState = {
  pickApartments: [],
  isLoading: false,
  error: '',
};

export const pickApartmentsSlice = createSlice({
  name: 'pickApartments',
  initialState,
  reducers: {
    pickApartmentsFetching(state) {
      state.isLoading = true;
    },
    pickApartmentsFetchingSuccess(state, action: PayloadAction<IPickApartmentsCard[]>) {
      state.isLoading = false;
      state.error = '';
      state.pickApartments = action.payload;
    },
    pickApartmentsFetchingError(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default pickApartmentsSlice.reducer;
