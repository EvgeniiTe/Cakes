import React from "react";

export const DrawImage = ({ styleName, src, height, width, alt, title }) => (
  <img
    src={src}
    height={height}
    width={width}
    alt={alt}
    title={title}
    style={{ objectFit: "cover" }}
  />
);
