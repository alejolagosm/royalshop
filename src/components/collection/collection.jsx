import React from 'react';
import { useParams } from 'react-router-dom';
import CollectionItem from '../collection-item/collection-item.component';
import SHOP_DATA from '../../pages/shop/shop.data';

import './styles.scss';

function Collection() {
  let params = useParams();
  const collection = SHOP_DATA.find(item => item.routeName === params.category);
  return (
    <div className="collection-preview">
      <h1 className="title">{collection.title.toUpperCase()}</h1>
      <div className="total">
        {collection.items.map(({ id, ...otherItemProps }) => (
          <CollectionItem key={id} {...otherItemProps} />
        ))}
      </div>
    </div>
  );
}

export default Collection;
