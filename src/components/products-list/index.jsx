import React from 'react';

import './products-list.css';

export const ProductsList = ({data, itemSelected}) => {

    const items = data.map((item) => {
        const { id, name, picture } = item;
        return(
            <li className="item"
                key={name}
                onClick={() => itemSelected(id)}>
                <img className="item-img" src={picture} alt={name} width="180px" />
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