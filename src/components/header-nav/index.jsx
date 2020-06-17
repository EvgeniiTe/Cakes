import React from "react";

import { getNavMain } from "../../services/service";
import { withApiRequest } from "../hoc-helpers/withApiRequest";

const render = (props) => {
  const { response } = props;

  const navMainMap = response.map(({ navMainWord, navMainRef }) => {
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

export const HeaderNav = withApiRequest(getNavMain, render);
