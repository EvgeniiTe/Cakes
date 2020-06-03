import React from 'react';

import './product.css';

const Product = () => {

    return(
        <article className="product">
            <div className="product-container">
            <h2 className="product-name">СНИКЕРС</h2>
            <p className="product-info">Влажный шоколадный бисквит,<br/>
                крем на основе сливочного сыра,<br/>
                тягучая карамель и жареный арахис<br/>
                объединились, чтобы подарить вам<br/>
                невероятный ансамбль вкуса и текстур.</p>
            </div>
            <img className="product-img" src="#" alt="Торт1" />
        </article>
    );
};

export default Product;