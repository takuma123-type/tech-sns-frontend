import React from "react";

interface PostItemProps {
  code: string;
  avatar_url: string;
  name: string;
  tags: string[];
  content: string;
  onClick: () => void;
}

export const PostItemComponent: React.FC<PostItemProps> = ({
  code,
  avatar_url,
  name,
  tags,
  content,
  onClick,
}) => {
  return (
    <div
      className="w-full max-w-lg bg-white shadow-md rounded-md overflow-hidden mt-4 p-6 flex items-start space-x-4 cursor-pointer"
      onClick={onClick}
    >
      <img
        className="w-16 h-16 rounded-full object-cover border-2 border-teal-500"
        src={avatar_url || "/images/noimage.jpg"}
        alt="User avatar"
      />
      <div className="flex flex-col flex-1">
        <h3 className="text-xl text-gray-800 font-bold">{name}</h3>
        <div className="flex space-x-2 mt-2">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="bg-gray-200 text-sm rounded-full text-gray-900 px-3 py-1"
            >
              {tag}
            </span>
          ))}
        </div>
        <p className="text-gray-600 text-base mt-4">{content}</p>
      </div>
    </div>
  );
};
