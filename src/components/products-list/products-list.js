import React from 'react';

import './products-list.css';

const ProductsList = () => {

    return (
        <ul className="items">
            <li className="item">
                <img className="item-img" src="#" alt="Торт-1" />
                <p className="item-name">Торт 1</p>
            </li>
            <li className="item">
                <img className="item-img" src="#" alt="Торт-1" />
                <p className="item-name">Торт 1</p>
            </li>
            <li className="item">
                <img className="item-img" src="#" alt="Торт-1" />
                <p className="item-name">Торт 1</p>
            </li>
        </ul>
    );
};

export default ProductsList;