import React from "react";

import "./header.css";

import { HeaderTop } from "../header-top";
import { HeaderNavWithApiRequest } from "../header-nav";

export const Header = () => (
  <header id="Header">
    <HeaderTop />
    <HeaderNavWithApiRequest />
  </header>
);
