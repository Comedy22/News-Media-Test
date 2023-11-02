import { createSlice } from '@reduxjs/toolkit';
import type { NewsType } from '../../types/newsTypes';
import fetchNewsThunk from './newsThunk';

const initialState: NewsType = {
  posts: [],
  total: 0,
  skip: 0,
  limit: 0,
};

export const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchNewsThunk.fulfilled, (state, action) => {
      state.posts.push(...action.payload.posts);
      state.total = action.payload.total;
      state.skip = action.payload.skip;
      state.limit = action.payload.limit;
    });
  },
});

export default newsSlice.reducer;
