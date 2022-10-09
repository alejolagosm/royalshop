import React from 'react';

import Directory from '../../components/directory/directory.component';

const sections = [
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
];

const Home = () => {
  return <Directory categories={sections} />;
};

export default Home;
