import axios from 'axios';
import type { NewsType } from '../types/newsTypes';

const fetchNewsService = async (): Promise<NewsType> => {
  const response = await axios.get('https://dummyjson.com/posts?limit=10');
  return response.data as NewsType;
};

export default fetchNewsService;
