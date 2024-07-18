import React from "react";
import { PostItemWithIsNew } from "../../models/presentation/PostItem";
import { PostItemComponent } from "../molecules/PostItem";

interface PostListProps {
  posts: PostItemWithIsNew[];
  onPostClick: (code: string) => void;
}

const PostListMemo: React.FC<PostListProps> = ({ posts, onPostClick }) => {
  return (
    <div className="flex flex-col items-center space-y-3 sm:space-y-3 md:space-y-4 lg:space-y-6 px-3 sm:px-6 lg:px-12 w-full">
      {posts.map((post) => {
        const formattedAvatarUrl = post.avatar_url.startsWith("data:image/png;base64,")
          ? post.avatar_url
          : `data:image/png;base64,${post.avatar_url}`;

        return (
          <PostItemComponent
            key={post.code} 
            code={post.code}
            avatar_url={formattedAvatarUrl}
            name={post.name}
            tags={post.tags}
            content={post.content}
            onClick={() => onPostClick(post.code)}
            isNew={post.isNew} 
          />
        );
      })}
    </div>
  );
};

export const PostList = React.memo(PostListMemo);
