import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IApartment } from '../../models/IApartment';

interface ApartmentState {
  apartments: IApartment[];
  isLoading: boolean;
  error: string;
}

const initialState: ApartmentState = {
  apartments: [],
  isLoading: false,
  error: '',
};

export const apartmentSlice = createSlice({
  name: 'apartment',
  initialState,
  reducers: {
    apartmentsFetching(state) {
      state.isLoading = true;
    },
    apartmentsFetchingSuccess(state, action: PayloadAction<IApartment[]>) {
      state.isLoading = false;
      state.error = '';
      state.apartments = action.payload;
    },
    apartmentsFetchingError(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default apartmentSlice.reducer;
