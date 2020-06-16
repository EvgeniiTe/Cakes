import React, { Component } from "react";
import { mainInfoFill } from "../../services/service";
import { PMap } from "../p-map";

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

    return (
      <section id="MainInfo" className="main-info">
        <h1>Торты на заказ</h1>
        <PMap data={mainInfo} />
        <div className="my-story">
          <a href="#MyStory">Моя история</a>
        </div>
      </section>
    );
  }
}
