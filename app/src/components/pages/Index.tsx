import React, { useEffect, useState } from 'react';
import { FetchPostsUsecase } from '../../usecase/FetchPostUsecase';
import { PostsRepository } from '../../infrastructure/repository/PostsRepository';
import { PostItem } from '../../models/presentation/PostItem';

const Index: React.FC = () => {
  const [posts, setPosts] = useState<PostItem[]>([]);
  const [error, setError] = useState<string | null>(null);

  const fetchData = async () => {
    const postsRepository = new PostsRepository();
    const usecase = new FetchPostsUsecase(postsRepository);
    try {
      const output = await usecase.fetch();
      console.log('Fetched posts:', output.posts); // デバッグ用ログ
      setPosts(output.posts);
    } catch (error) {
      console.error('Error fetching posts:', error);
      setError('Failed to fetch posts');
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.code}>
            <img src={post.avatar_url} alt={post.name} />
            <h2>{post.name}</h2>
            <p>{post.content}</p>
            <ul>
              {post.tags.map((tag: string) => (
                <li key={tag}>{tag}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Index;
