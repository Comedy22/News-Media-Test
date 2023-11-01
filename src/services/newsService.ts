import axios from 'axios';
import type { NewsType } from '../types/newsTypes';

const fetchNewsService = async (): Promise<NewsType> => {
  const response = await axios.get('https://dummyjson.com/posts');
  return response.data as NewsType;
};

export default fetchNewsService;
