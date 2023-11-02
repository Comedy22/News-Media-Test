import React from 'react';
import { Flex } from 'antd';
import useNewsList from '../../redux/hooks/useNewsList';
import NewsCard from './NewsCard';

function NewsList(): JSX.Element {
  const { posts } = useNewsList();

  return (
    <Flex vertical>
      {posts.map((post) => (
        <NewsCard key={post.id} post={post} />
      ))}
    </Flex>
  );
}

export default NewsList;
