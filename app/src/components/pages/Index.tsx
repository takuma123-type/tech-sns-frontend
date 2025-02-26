import React, { useEffect, useState } from 'react';
import { FetchPostsUsecase } from '../../usecase/FetchPostUsecase';
import { PostsRepository } from '../../infrastructure/repository/PostsRepository';
import { PostItem, PostItemWithIsNew } from '../../models/presentation/PostItem';
import IconHeader from '../organism/IconHeader';
import { PostList } from '../organism/PostList';
import MobileFooter from '../organism/MobileFooter';
import { Modal } from '../organism/Modal';
import { GetPostUsecase } from '../../usecase/GetPostUsecase';
import { createPostsSubscription } from '../../infrastructure/cable';
import '../../styles/animations.css'; // アニメーションCSSをインポート

const Index: React.FC = () => {
  const [posts, setPosts] = useState<PostItemWithIsNew[]>([]);
  const [selectedPost, setSelectedPost] = useState<PostItem | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [reconnecting, setReconnecting] = useState(false);

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

  const setupSubscription = () => {
    const subscription = createPostsSubscription({
      connected() {
        setReconnecting(false);
      },
      disconnected() {
        if (!reconnecting) {
          setReconnecting(true);
          setTimeout(() => {
            setupSubscription();
          }, 3000); // 3秒後に再接続を試みる
        }
      },
      received(data) {
        const parsedData = JSON.parse(data.post);      
        // userオブジェクトからnameとavatar_urlを抽出
        const { name, avatar_data: avatar_url } = parsedData.user;
      
        const newPost: PostItemWithIsNew = new PostItem({
          code: parsedData.code,
          avatar_url,
          name,
          tags: parsedData.tags,
          content: parsedData.content,
        });
        newPost.isNew = true; // 新しい投稿にフラグを付ける
      
        setPosts((prevPosts) => [newPost, ...prevPosts]);
      },
      rejected() {
        console.error('WebSocket connection rejected');
      },
    });
  
    return subscription;
  };

  useEffect(() => {
    fetchData();
    const subscription = setupSubscription();

    return () => {
      subscription.unsubscribe();
    };
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
            {selectedPost.avatar_url ? (
              <img
                className="w-16 h-16 rounded-full object-cover border-2 border-teal-500"
                src={selectedPost.avatar_url.startsWith("data:image") ? selectedPost.avatar_url : `data:image/jpeg;base64,${selectedPost.avatar_url}`}
                alt="User avatar"
              />
            ) : (
              <img
                className="w-16 h-16 rounded-full object-cover border-2 border-teal-500"
                src="/images/noimage.jpg"
                alt="No avatar"
              />
            )}
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
