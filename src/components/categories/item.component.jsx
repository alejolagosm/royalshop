import { useNavigate } from 'react-router-dom';

import './styles.scss';

const CategoryItem = ({ category }) => {
  const { imageUrl, title, size } = category;
  return (
    <div className={`category-container ${size}`}>
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

export default CategoryItem;
