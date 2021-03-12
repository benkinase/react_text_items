import React from "react";

export const SearchBar = (props) => {
  const { addRandomText, handleChange, searchTerm } = props;
  return (
    <div className='search-btn-container'>
      <input
        placeholder='Search'
        value={searchTerm}
        onChange={handleChange}
        className='search-input'
      />
      <button className='add-button' onClick={() => addRandomText()}>
        <i className='fas fa-plus'></i>
      </button>
    </div>
  );
};
