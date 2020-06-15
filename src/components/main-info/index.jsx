import React from 'react';

import './main-info.css';

export const MainInfo = () => {
  return (
    <section id="MainInfo" className="main-info">
      <h1>Торты на заказ</h1>
      <p>Кондитерская</p>
      <p>уникальный вкус</p>
      <p>инженерный подход</p>
      <p>От 1,5 кг | От 1500/кг</p>
      <p>Москва</p>
      <div className="my-story">
        <a href="#MyStory">Моя история</a>
      </div>
    </section>
  );
};
