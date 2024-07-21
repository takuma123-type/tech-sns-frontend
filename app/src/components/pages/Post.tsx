import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import IconHeader from '../organism/IconHeader';
import MobileFooter from '../organism/MobileFooter';
import SelectDropdown from '../atoms/SelectDropdown';
import '../../styles/Post.css';
import { FetchTagsUsecase } from '../../usecase/FetchTagUsecase';
import { TagsRepository } from '../../infrastructure/repository/TagRepository';
import { TagItem } from '../../models/presentation/TagItem';
import { CreatePostUsecase } from '../../usecase/CreatePostUsecase';
import { PostsRepository } from '../../infrastructure/repository/PostsRepository';
import { PostCreateItem } from '../../models/presentation/PostCreateItem';

export const Post = () => {
  const [options, setOptions] = useState<{ value: number; label: string }[]>([]);
  const [content, setContent] = useState('');
  const [selectedTags, setSelectedTags] = useState<number[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchTags = async () => {
      const tagRepository = new TagsRepository();
      const fetchTagsUsecase = new FetchTagsUsecase(tagRepository);
      try {
        const output = await fetchTagsUsecase.fetch();
        const tagOptions = output.tags.map((tag: TagItem, index: number) => ({
          value: index,
          label: tag.name,
        }));
        setOptions(tagOptions);
      } catch (error) {
        console.error('Error fetching tags:', error);
      }
    };

    fetchTags();
  }, []);

  const handleSelect = (value: number) => {
    setSelectedTags((prevSelectedTags) => [...prevSelectedTags, value]);
    console.log(`Selected value: ${value}`);
  };

  const getToken = () => {
    // トークンを取得するロジックをここに追加
    const token = localStorage.getItem('authToken'); // 例: ローカルストレージから取得する場合
    console.log('Retrieved token:', token); // トークンをログに出力して確認
    return token;
  };

  const handleSubmit = async () => {
    const token = getToken(); // トークンを取得
    if (!token) {
      console.error('No token found');
      return;
    }
    console.log('Token found:', token); // トークンが取得できたことを確認
    const postRepository = new PostsRepository();
    const createPostUsecase = new CreatePostUsecase(
      new PostCreateItem({ content, tags: selectedTags.map(index => options[index].label) }),
      postRepository
    );
    try {
      const output = await createPostUsecase.create(token); // トークンを渡す
      navigate("/"); // プロフィール画面に遷移
      console.log('Post created with code:', output.code);
    } catch (error) {
      console.error('Error creating post:', error);
    }
  };

  return (
    <div className="post-container">
      <IconHeader />
      <div className="post-content">
        <form className="form-container">
          <div className="form-group">
            <label htmlFor="large-input" className="form-label">
              いまどうしてる？
            </label>
            <textarea
              id="large-input"
              className="form-textarea"
              rows={4}
              value={content}
              onChange={(e) => setContent(e.target.value)}
            ></textarea>
          </div>
        </form>
        <div className="tag-container">
          <div className="tag-label">タグ</div>
          <div className="tag-dropdowns">
            <SelectDropdown options={options} onSelect={handleSelect} />
            <SelectDropdown options={options} onSelect={handleSelect} />
            <SelectDropdown options={options} onSelect={handleSelect} />
          </div>
        </div>
        <div className="submit-button-container">
          <button
            type="button"
            className="submit-button"
            onClick={handleSubmit}
          >
            ポスト
          </button>
        </div>
      </div>
      <MobileFooter />
    </div>
  );
};