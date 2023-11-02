/* eslint-disable react-refresh/only-export-components */
import React from 'react';
import { Card } from 'antd';
import type { Post } from '../../types/newsTypes';

type NewsCardProps = {
  post: Post;
};

function NewsCard({ post }: NewsCardProps): JSX.Element {
  return (
    <Card
      title={post.title}
      style={{
        margin: '16px',
        width: '300px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        borderRadius: '8px',
        backgroundColor: '#f5f5f5',
      }}
    >
      <p>{post.body}</p>
      <div>Tags: {post.tags.join(', ')}</div>
      <div>Reactions: {post.reactions}</div>
    </Card>
  );
}

export default React.memo(NewsCard);
