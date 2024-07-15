import React from "react";
import { PostItem } from "../../models/presentation/PostItem";
import { PostItemComponent } from "../molecules/PostItem";

interface PostListProps {
  posts: PostItem[];
  onPostClick: (code: string) => void;
}

const PostListMemo: React.FC<PostListProps> = ({ posts, onPostClick }) => {
  return (
    <div className="flex flex-col items-center space-y-3 sm:space-y-3 md:space-y-4 lg:space-y-6 px-3 sm:px-6 lg:px-12 w-full">
      {posts.map((post) => (
        <PostItemComponent
          key={post.code}
          code={post.code}
          avatar_url={post.avatar_url}
          name={post.name}
          tags={post.tags}
          content={post.content}
          onClick={() => onPostClick(post.code)}
        />
      ))}
    </div>
  );
};

export const PostList = React.memo(PostListMemo);
