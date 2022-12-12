import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IService } from '../../models/IService';

interface ServicesState {
  services: IService[];
  isLoading: boolean;
  error: string;
}

const initialState: ServicesState = {
  services: [],
  isLoading: false,
  error: '',
};

export const serviceSlice = createSlice({
  name: 'service',
  initialState,
  reducers: {
    serviceFetching(state) {
      state.isLoading = true;
    },
    serviceFetchingSuccess(state, action: PayloadAction<IService[]>) {
      state.isLoading = false;
      state.error = '';
      state.services = action.payload;
    },
    serviceFetchingError(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default serviceSlice.reducer;
