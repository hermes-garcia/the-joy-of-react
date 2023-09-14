import React from 'react';

import ShoeCard from '../ShoeCard';
import styles from './ShoeGrid.module.css';

function ShoeGrid({ isPlaceholder, shoes }) {
  const actualShoes = isPlaceholder ? FAKE_SHOES : shoes;

  return (
    <div className={styles.wrapper} aria-hidden={isPlaceholder}>
      {actualShoes.map((shoe) => (
        <ShoeCard
          key={shoe.slug}
          shoe={shoe}
          isPlaceholder={isPlaceholder}
        />
      ))}
    </div>
  );
}

const FAKE_SHOES = [
  {
    slug: '001',
    name: 'Nike FakeShoe 1',
    price: 14500,
    numOfColors: 2,
    releaseDate: Date.now() - 1000 * 60 * 60 * 1,
  },
  {
    slug: '002',
    name: 'AirWhatever Illegible',
    price: 16500,
    numOfColors: 2,
  },
  {
    slug: '003',
    name: 'Nike Undefined',
    price: 16000,
    salePrice: 14000,
    numOfColors: 1,
  },
  {
    slug: '004',
    name: 'Another fake shoe!',
    price: 12345,
    numOfColors: 1,
    releaseDate: Date.now() - 1000 * 60 * 60 * 1,
  },
  {
    slug: '005',
    name: 'Yep shoe',
    price: 12345,
    salePrice: 1234,
    numOfColors: 1,
  },
  {
    slug: '006',
    name: 'An amazingly fake shoe 1',
    price: 16500,
    numOfColors: 5,
  },
];

export default ShoeGrid;
