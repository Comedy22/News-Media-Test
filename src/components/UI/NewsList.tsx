import React, { useEffect } from 'react';
import fetchNewsThunk from '../../redux/slices/newsThunk';
import NewsCard from './NewsCard';
import { useAppDispatch, useAppSelector } from '../../redux/hooks/reduxHooks';

function NewsList(): JSX.Element {
  const dispatch = useAppDispatch();
  const posts = useAppSelector((state) => state.news.posts);

  useEffect(() => {
    void dispatch(fetchNewsThunk());
  }, [dispatch]);

  return (
    <div>
      {posts.map((post) => (
        <NewsCard key={post.id} post={post} />
      ))}
    </div>
  );
}

export default NewsList;
