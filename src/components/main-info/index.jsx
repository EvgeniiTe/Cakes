import React, { Component } from "react";
import { mainInfoFill } from "../../services/service";
import { PMap } from "../p-map";
import { CreateDiv } from "../create-div";
import { CreateHeading } from "../create-heading";

import "./main-info.css";

export class MainInfo extends Component {
  state = { mainInfo: [] };

  componentDidMount() {
    this.getMainInfo();
  }

  getMainInfo() {
    mainInfoFill().then((data) => {
      this.setState({ mainInfo: data });
    });
  }

  render() {
    const { mainInfo } = this.state;

    const linkStory = () => {
      return <a href="#MyStory">Моя история</a>;
    };

    return (
      <section id="MainInfo" className="main-info">
        <CreateHeading h="h1" text="Торты на заказ" />
        <PMap data={mainInfo} />
        <CreateDiv className="my-story" childEl={linkStory} />
      </section>
    );
  }
}
