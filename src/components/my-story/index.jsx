import React, { Component } from "react";
import { storyInfoFill } from "../../services/service";
import { PMap } from "../p-map";

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
        <h2>Моя история</h2>
        <PMap data={storyInfo} />
      </section>
    );
  }
}
