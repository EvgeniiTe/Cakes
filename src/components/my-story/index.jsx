import React from "react";
import { storyInfoFill } from "../../services/service";
import { PMap } from "../p-map";
import { CreateHeading } from "../create-heading";
import { withData } from "../hoc-helpers/with-data";

import "./my-story.css";

const render = (props) => {
  const { data } = props;

  return (
    <section id="MyStory" className="story">
      <CreateHeading h="h2" text="Моя история" />
      <PMap data={data} />
    </section>
  );
};

export const MyStory = withData(storyInfoFill, render);
