import React, { Component } from "react";
import { storyInfoFill } from "../../services/service";
import { PMap } from "../p-map";
import { CreateHeading } from "../create-heading";

import "./my-story.css";

export class MyStory extends Component {
  state = { storyInfo: [] };

  componentDidMount() {
    this.getStoryInfo();
  }

  getStoryInfo() {
    storyInfoFill().then((data) => {
      this.setState({ storyInfo: data });
    });
  }

  render() {
    const { storyInfo } = this.state;

    return (
      <section id="MyStory" className="story">
        <CreateHeading h="h2" text="Моя история" />
        <PMap data={storyInfo} />
      </section>
    );
  }
}
