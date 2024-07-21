import React, { useEffect, useState } from 'react';
import IconHeader from '../organism/IconHeader';
import MobileFooter from '../organism/MobileFooter';
import SelectDropdown from '../atoms/SelectDropdown';
import '../../styles/Post.css';
import { FetchTagsUsecase } from '../../usecase/FetchTagUsecase';
import { TagsRepository } from '../../infrastructure/repository/TagRepository';
import { TagItem } from '../../models/presentation/TagItem';

export const Post = () => {
  const [options, setOptions] = useState<{ value: number; label: string }[]>([]);

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
    console.log(`Selected value: ${value}`);
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
          >
            ポスト
          </button>
        </div>
      </div>
      <MobileFooter />
    </div>
  );
};