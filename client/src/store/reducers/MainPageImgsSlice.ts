import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IMainPageImgs } from '../../models/IMainPageImg';

interface ApartmentState {
  mainPageImgs: IMainPageImgs[];
  isLoading: boolean;
  error: string;
}

const initialState: ApartmentState = {
  mainPageImgs: [],
  isLoading: false,
  error: '',
};

export const mainPageImgsSlice = createSlice({
  name: 'mainPageImgs',
  initialState,
  reducers: {
    mainPageImgsFetching(state) {
      state.isLoading = true;
    },
    mainPageImgsFetchingSuccess(state, action: PayloadAction<IMainPageImgs[]>) {
      state.isLoading = false;
      state.error = '';
      state.mainPageImgs = action.payload;
    },
    mainPageImgsFetchingError(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default mainPageImgsSlice.reducer;
