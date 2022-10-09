import React from 'react';
import MenuItem from '../menu-item/menu-item.component';
import './styles.scss';

const Directory = ({ categories }) => {
  return (
    <div className="directory-container">
      {categories.map(({ id, ...otherSectionProps }) => (
        <MenuItem key={id} {...otherSectionProps} />
      ))}
    </div>
  );
};

export default Directory;
