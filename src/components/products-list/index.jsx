import React from 'react';

import './products-list.css';

const ProductsList = ({data, itemSelected}) => {

    const items = data.map((item) => {
        const { id, name, picture } = item;
        return(
            <li className="item"
                key={id}
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

export default ProductsList;