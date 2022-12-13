import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ISocial } from '../../models/ISocial';

interface SocialsState {
  socials: ISocial[];
  isLoading: boolean;
  error: string;
}

const initialState: SocialsState = {
  socials: [],
  isLoading: false,
  error: '',
};

export const socialSlice = createSlice({
  name: 'social',
  initialState,
  reducers: {
    socialFetching(state) {
      state.isLoading = true;
    },
    socialFetchingSuccess(state, action: PayloadAction<ISocial[]>) {
      state.isLoading = false;
      state.error = '';
      state.socials = action.payload;
    },
    socialFetchingError(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default socialSlice.reducer;
