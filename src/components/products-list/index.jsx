import React from 'react';

import './products-list.css';

import { DrawImage } from '../draw-image';

export const ProductsList = ({data, itemSelected}) => {

    const items = data.map((item) => {
        const { id, name, picture } = item;
        return(
            <li className="item"
                key={name}
                onClick={() => itemSelected(id)}>
                <DrawImage 
                    className="item-img" 
                    src={picture}
                    width="180px"
                    alt={name} />
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