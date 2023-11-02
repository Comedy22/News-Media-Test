import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from './reduxHooks';
import fetchNewsThunk from '../slices/newsThunk';
import type { Post } from '../../types/newsTypes';

function useNewsList(): { posts: Post[] } {
  const dispatch = useAppDispatch();
  const posts = useAppSelector((state) => state.news.posts);

  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      try {
        await dispatch(fetchNewsThunk());
      } catch (error) {
        console.error('Error fetching news:', error);
      }
    };

    void fetchData();

    const scrollHandler = (): void => {
      if (
        window.innerHeight + document.documentElement.scrollTop ===
        document.documentElement.offsetHeight
      ) {
        void fetchData();
      }
    };

    window.addEventListener('scroll', scrollHandler);

    return () => {
      window.removeEventListener('scroll', scrollHandler);
    };
  }, [dispatch]);

  return { posts };
}

export default useNewsList;
