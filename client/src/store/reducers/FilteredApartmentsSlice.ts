import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IApartment } from '../../models/IApartment';

interface CardTitleState {
  filteredApartments: IApartment[];
}

const initialState: CardTitleState = {
  filteredApartments: [],
};

export const filteredApartmentsSlice = createSlice({
  name: 'filteredApartments',
  initialState,
  reducers: {
    getFilteredApartments(state, action: PayloadAction<IApartment[]>) {
      state.filteredApartments = action.payload;
    },
  },
});

export default filteredApartmentsSlice.reducer;
