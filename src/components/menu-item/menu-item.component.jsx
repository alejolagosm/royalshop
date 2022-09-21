import React from 'react';
import { useNavigate } from 'react-router-dom';

import './styles.scss';

const MenuItem = ({ title, imageUrl, size, linkUrl }) => {
  let navigate = useNavigate();
  return (
    <div
      className={`category-container ${size}`}
      onClick={() => navigate(`/shop/${linkUrl}`)}
    >
      <div
        className="menu-item"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="category-body-container">
        <h2>{title.toUpperCase()}</h2>
        <p>Shop Now</p>
      </div>
    </div>
  );
};

export default MenuItem;
