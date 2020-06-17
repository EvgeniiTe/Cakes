import React from "react";

import { getNavMain } from "../../services/service";
import { withData } from "../hoc-helpers/with-data";

const render = (props) => {
  const { data } = props;

  const navMainMap = data.map(({ navMainWord, navMainRef }) => {
    return (
      <li key={navMainWord}>
        <a href={navMainRef}>{navMainWord}</a>
      </li>
    );
  });

  return (
    <nav>
      <ul>{navMainMap}</ul>
    </nav>
  );
};

export const HeaderNav = withData(getNavMain, render);
