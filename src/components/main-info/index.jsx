import React from "react";
import { ParagraphsLineByLine } from "../paragraphs-line-by-line";
import { CreateDiv } from "../create-div";
import { CreateHeading } from "../create-heading";
import { withApiRequest } from "../hoc-helpers/withApiRequest";

import "./main-info.css";

const temp = (props) => {
  const { response } = props;

  const linkStory = () => {
    return <a href="#MyStory">Моя история</a>;
  };

  return (
    <section id="MainInfo" className="main-info">
      <CreateHeading h="h1" text="Торты на заказ" />
      <ParagraphsLineByLine data={response} />
      <CreateDiv className="my-story" childEl={linkStory} />
    </section>
  );
};

export const MainInfo = withApiRequest("mainInfoFill", temp);
