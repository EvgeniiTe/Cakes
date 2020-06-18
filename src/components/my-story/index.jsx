import React from "react";
import { ParagraphsLineByLine } from "../paragraphs-line-by-line";
import { CreateHeading } from "../create-heading";
import { withApiRequest } from "../hoc-helpers/withApiRequest";

import "./my-story.css";

const MyStory = (props) => {
  const { response } = props;

  return (
    <section id="MyStory" className="story">
      <CreateHeading h="h2" text="Моя история" />
      <ParagraphsLineByLine data={response} />
    </section>
  );
};

export const MyStoryWithApiRequest = withApiRequest("storyInfoFill", MyStory);
