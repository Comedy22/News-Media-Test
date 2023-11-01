import { createAsyncThunk } from '@reduxjs/toolkit';
import fetchNewsService from '../../services/newsService';

const fetchNewsThunk = createAsyncThunk('/', async () => {
  try {
    const response = await fetchNewsService();
    return response;
  } catch (error) {
    return Promise.reject(error);
  }
});
export default fetchNewsThunk;
