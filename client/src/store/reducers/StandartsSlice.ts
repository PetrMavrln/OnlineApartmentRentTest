import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IStandart } from '../../models/IStandart';

interface StandartsState {
  standarts: IStandart[];
  isLoading: boolean;
  error: string;
}

const initialState: StandartsState = {
  standarts: [],
  isLoading: false,
  error: '',
};

export const standartSlice = createSlice({
  name: 'standart',
  initialState,
  reducers: {
    standartFetching(state) {
      state.isLoading = true;
    },
    standartFetchingSuccess(state, action: PayloadAction<IStandart[]>) {
      state.isLoading = false;
      state.error = '';
      state.standarts = action.payload;
    },
    standartFetchingError(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default standartSlice.reducer;
