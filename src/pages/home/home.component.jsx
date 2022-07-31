import React from 'react';
import Directory from '../../components/categories/directory.component';

const Home = () => {
  const categories = [
    {
      id: 1,
      title: 'For Dogs',
      imageUrl: 'https://source.unsplash.com/oU6KZTXhuvk',
      size: 'large',
    },
    {
      id: 2,
      title: 'For Cats',
      imageUrl: 'https://source.unsplash.com/ougV1Hh60ig',
      size: 'large',
    },
    {
      id: 3,
      title: 'Accesories',
      imageUrl: 'https://source.unsplash.com/u1B3DuwU4dA',
    },
    {
      id: 4,
      title: 'Food',
      imageUrl: 'https://source.unsplash.com/zxqaAkkayP8',
    },
    {
      id: 5,
      title: 'All',
      imageUrl: 'https://source.unsplash.com/vi3yGOPBZSY',
    },
  ];

  return <Directory categories={categories} />;
};

export default Home;
