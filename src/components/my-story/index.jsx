import React from "react";
import { storyInfoFill } from "../../services/service";
import { PMap } from "../p-map";
import { CreateHeading } from "../create-heading";
import { withApiRequest } from "../hoc-helpers/withApiRequest";

import "./my-story.css";

const temp = (props) => {
  const { response } = props;

  return (
    <section id="MyStory" className="story">
      <CreateHeading h="h2" text="Моя история" />
      <PMap data={response} />
    </section>
  );
};

export const MyStory = withApiRequest(storyInfoFill, temp);
