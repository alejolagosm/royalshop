import React from 'react';

import MenuItem from '../menu-item/menu-item.component';

import './styles.scss';

class Directory extends React.Component {
  constructor() {
    super();
    this.state = {
      sections: [
        {
          id: 1,
          title: 'For Dogs',
          imageUrl: 'https://source.unsplash.com/oU6KZTXhuvk',
          size: 'large',
          linkUrl: 'dogs',
        },
        {
          id: 2,
          title: 'For Cats',
          imageUrl: 'https://source.unsplash.com/ougV1Hh60ig',
          size: 'large',
          linkUrl: 'cats',
        },
        {
          id: 3,
          title: 'Accesories',
          imageUrl: 'https://source.unsplash.com/u1B3DuwU4dA',
          linkUrl: 'accesories',
        },
        {
          id: 4,
          title: 'Food',
          imageUrl: 'https://source.unsplash.com/zxqaAkkayP8',
          linkUrl: 'food',
        },
        {
          id: 5,
          title: 'All',
          imageUrl: 'https://source.unsplash.com/vi3yGOPBZSY',
          linkUrl: 'all',
        },
      ],
    };
  }

  render() {
    return (
      <div className="directory-container">
        {this.state.sections.map(({ id, ...otherSectionProps }) => (
          <MenuItem key={id} {...otherSectionProps} />
        ))}
      </div>
    );
  }
}

export default Directory;
