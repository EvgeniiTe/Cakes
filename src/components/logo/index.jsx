import React from "react";

import { DrawImage } from "../draw-image";

export const Logo = ({ height }) => {
  return <DrawImage src="./pic/logo.jpg" height={height} alt="logo" />;
};
