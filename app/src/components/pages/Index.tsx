import React, { useEffect, useState } from 'react';
import { FetchPostsUsecase } from '../../usecase/FetchPostUsecase';
import { PostsRepository } from '../../infrastructure/repository/PostsRepository';
import { PostItem } from '../../models/presentation/PostItem';
import IconHeader from '../organism/IconHeader';
import { PostList } from '../organism/PostList';
import Search from '../organism/Search';
import MobileFooter from '../organism/MobileFooter';

const Index: React.FC = () => {
  const [posts, setPosts] = useState<PostItem[]>([]);
  const [error, setError] = useState<string | null>(null);

  const fetchData = async () => {
    const postsRepository = new PostsRepository();
    const usecase = new FetchPostsUsecase(postsRepository);
    try {
      const output = await usecase.fetch();
      setPosts(output.posts);
    } catch (error) {
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
    <div className="pt-16 pb-24">
      <IconHeader />
      <PostList posts={posts} />
      <MobileFooter />
    </div>
  );
};

export default Index;
