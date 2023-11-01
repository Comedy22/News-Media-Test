export type NewsType = {
  posts: Post[];
  total: number;
  skip: number;
  limit: number;
};

export type Post = {
  id: number;
  title: string;
  body: string;
  userId: number;
  tags: string[];
  reactions: number;
};