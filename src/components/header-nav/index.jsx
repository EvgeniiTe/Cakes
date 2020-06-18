import React from "react";

import { withApiRequest } from "../hoc-helpers/withApiRequest";

const HeaderNav = (props) => {
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

export const HeaderNavWithApiRequest = withApiRequest("getNavMain", HeaderNav);
