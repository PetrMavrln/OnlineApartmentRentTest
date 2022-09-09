import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IReview } from '../../models/IReview';

interface ReviewState {
  reviews: IReview[];
  isLoading: boolean;
  error: string;
}

const initialState: ReviewState = {
  reviews: [],
  isLoading: false,
  error: '',
};

export const reviewSlice = createSlice({
  name: 'review',
  initialState,
  reducers: {
    reviewsFetching(state) {
      state.isLoading = true;
    },
    reviewsFetchingSuccess(state, action: PayloadAction<IReview[]>) {
      state.isLoading = false;
      state.error = '';
      state.reviews = action.payload;
    },
    reviewsFetchingError(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default reviewSlice.reducer;
