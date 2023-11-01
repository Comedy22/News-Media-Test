import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import type { NewsType } from '../../types/newsTypes';

const initialState: NewsType = {
  posts: [],
  total: 0,
  skip: 0,
  limit: 10,
};

export const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {
    setNews: (state, action: PayloadAction<NewsType>) => {
      state.posts = [...state.posts, ...action.payload.posts];
      state.total = action.payload.total;
      state.skip = action.payload.skip;
    },
  },
});

export const { setNews } = newsSlice.actions;
export default newsSlice.reducer;
