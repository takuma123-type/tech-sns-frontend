import React from 'react';

interface SelectDropdownProps {
  options: { value: number; label: string }[];
  onSelect: (value: number) => void;
}

const SelectDropdown: React.FC<SelectDropdownProps> = ({ options, onSelect }) => {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = parseInt(e.target.value, 10);
    if (!isNaN(value)) {
      onSelect(value);
    }
  };

  return (
    <div className="dropdown-container">
      <select
        onChange={handleChange}
        className="dropdown-select"
      >
        <option value="">選択</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectDropdown;
