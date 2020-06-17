import React, { Component } from "react";

export const withData = (getData, Wrapped) => {
  return class extends Component {
    state = { data: [] };

    // componentDidUpdate(prevProps) {
    //   if (this.props.getData !== prevProps.getData) {
    //     this.update();
    //   }
    // }

    componentDidMount() {
      this.getInfo();
    }

    getInfo() {
      getData().then((data) => {
        this.setState({ data });
      });
    }

    render() {
      const { data } = this.state;

      return <Wrapped data={data} />;
    }
  };
};
