import React from 'react';

import './products-list.css';

import { DrawImage } from '../draw-image';

export const ProductsList = ({ data, selectItem }) => {
  const items = data.map((item) => {
    const { id, name, picture } = item;
    return (
      <li
        key={name}
        className="item"
        onClick={() => selectItem(id)}
      >
        <DrawImage
          className="item-img"
          src={picture}
          width="180px"
          alt={name}
        />
        <p className="item-name">{name}</p>
      </li>
    );
  });

  return (
    <ul className="items">
      {items}
    </ul>
  );
};
