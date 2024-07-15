import React from 'react';
import IconHeader from '../organism/IconHeader';
import MobileFooter from '../organism/MobileFooter';
import SelectDropdown from '../atoms/SelectDropdown';
import '../../styles/Post.css';

export const Post = () => {
  const options = [
    { value: 1, label: 'Option 1' },
    { value: 2, label: 'Option 2' },
    { value: 3, label: 'Option 3' },
  ];

  const handleSelect = (value: number) => {
    console.log('Selected value:', value);
  };

  return (
    <div className="post-container">
      <IconHeader />
      <div className="post-content">
        <form className="form-container">
          <div className="form-group">
            <label htmlFor="large-input" className="form-label">
              いまどうしてる？？
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
            送信
          </button>
        </div>
      </div>
      <MobileFooter />
    </div>
  );
};
