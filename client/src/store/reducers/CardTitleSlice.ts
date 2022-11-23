import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CardTitleState {
  title: string;
}

const initialState: CardTitleState = {
  title: '',
};

export const cardTitleSlice = createSlice({
  name: 'cardTitle',
  initialState,
  reducers: {
    getCardTitleSuccess(state, action: PayloadAction<string>) {
      state.title = action.payload;
    },
  },
});

export default cardTitleSlice.reducer;
