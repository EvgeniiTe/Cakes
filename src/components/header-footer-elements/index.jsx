import React from "react";
import { SocialLinks } from "../social-links";
import { Logo } from "../logo";

const name = () => {
  return <p>Bohemian Cakes</p>;
};

export const headerElements = [
  { element: name, className: "name flex-item" },
  { element: Logo, className: "logo flex-item", props: { height: "280rem" } },
  { element: SocialLinks, className: "flex-item" },
];

const temp = headerElements.find((item) => item.element === Logo);
const footerLogo = { ...temp };
footerLogo.props = { height: "100rem" };

export const footerElements = [
  footerLogo,
  headerElements[0],
  headerElements[2],
];
