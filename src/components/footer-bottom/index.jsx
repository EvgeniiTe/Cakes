import React from 'react';

import { Logo } from '../logo';
import { SocialLinks } from '../social-links';
import { CreateDiv } from '../create-div';

export const FooterBottom = () => {
  const FooterEl = [
    {
      classEl: 'logo flex-item',
      childEl: <Logo height="100rem" />,
    },

    {
      classEl: 'name flex-item',
      childEl: <p>Bohemian Cakes</p>,
    },

    {
      classEl: 'flex-item',
      childEl: <SocialLinks />,
    },

  ];

  const FooterElMap = FooterEl.map(({ classEl, childEl }) => (
    <CreateDiv
      key={`${classEl}+${childEl}`}
      className={classEl}
      childEl={childEl}
    />
  ));

  return (
    <div classElName="header-footer-container footer-container">
      {FooterElMap}
    </div>
  );
};
