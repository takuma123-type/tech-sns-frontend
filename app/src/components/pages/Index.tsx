import React, { useEffect, useState } from 'react';
import { FetchPostsUsecase } from '../../usecase/FetchPostUsecase';
import { PostsRepository } from '../../infrastructure/repository/PostsRepository';
import { PostItem } from '../../models/presentation/PostItem';
import IconHeader from '../organism/IconHeader';
import { PostList } from '../organism/PostList';
import MobileFooter from '../organism/MobileFooter';
import { Modal } from '../organism/Modal';
import { GetPostUsecase } from '../../usecase/GetPostUsecase';

const Index: React.FC = () => {
  const [posts, setPosts] = useState<PostItem[]>([]);
  const [selectedPost, setSelectedPost] = useState<PostItem | null>(null);
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

  const fetchPostDetail = async (code: string) => {
    const postsRepository = new PostsRepository();
    const usecase = new GetPostUsecase(postsRepository);
    try {
      const output = await usecase.get(code);
      setSelectedPost(output.post);
    } catch (error) {
      console.error("Error fetching post detail:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handlePostClick = (code: string) => {
    fetchPostDetail(code);
  };

  const handleCloseModal = () => {
    setSelectedPost(null);
  };

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="pt-16 pb-24">
      <IconHeader />
      <PostList posts={posts} onPostClick={handlePostClick} />
      <MobileFooter />
      {selectedPost && (
        <Modal onClose={handleCloseModal}>
          <div className="p-4">
            <img
              className="w-16 h-16 rounded-full object-cover border-2 border-teal-500"
              src={selectedPost.avatar_url || "/images/noimage.jpg"}
              alt="User avatar"
            />
            <div className="flex flex-col mt-4">
              <h3 className="text-xl text-gray-800 font-bold">{selectedPost.name}</h3>
              <div className="flex space-x-2 mt-2">
                {selectedPost.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-gray-200 text-sm rounded-full text-gray-900 px-3 py-1"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <p className="text-gray-600 text-base mt-4">{selectedPost.content}</p>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default Index;
