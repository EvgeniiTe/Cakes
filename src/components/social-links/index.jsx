import React from 'react';

import './social-links.css';

import { DrawImage } from '../draw-image';

export const SocialLinks = () => {
  return (
    <div className="social-links">
      <a
        href="https://www.instagram.com/bohemian_cakes/"
        target="_blank"
        className="social-link"
      >
        <DrawImage
          className=""
          src="./pic/inst.png"
          height="40px"
          alt=""
          title="Instagram"
        />
      </a>
    </div>
  );
};
