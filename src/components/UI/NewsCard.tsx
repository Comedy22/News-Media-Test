import React from 'react';
import { Card } from 'antd';
import type { Post } from '../../types/newsTypes';

type NewsCardProps = {
  post: Post;
};

function NewsCard({ post }: NewsCardProps): JSX.Element {
  return (
    <Card title={post.title} style={{ margin: '16px' }}>
      <p>{post.body}</p>
      <div>Tags: {post.tags.join(', ')}</div>
      <div>Reactions: {post.reactions}</div>
    </Card>
  );
}
export default NewsCard;
