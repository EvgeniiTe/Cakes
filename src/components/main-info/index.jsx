import React from "react";
import { PMap } from "../p-map";
import { CreateDiv } from "../create-div";
import { CreateHeading } from "../create-heading";
import { withData } from "../hoc-helpers/with-data";
import { mainInfoFill } from "../../services/service";

import "./main-info.css";

const render = (props) => {
  const { data } = props;

  const linkStory = () => {
    return <a href="#MyStory">Моя история</a>;
  };

  return (
    <section id="MainInfo" className="main-info">
      <CreateHeading h="h1" text="Торты на заказ" />
      <PMap data={data} />
      <CreateDiv className="my-story" childEl={linkStory} />
    </section>
  );
};

export const MainInfo = withData(mainInfoFill, render);
