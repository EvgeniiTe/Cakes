import React, { Component } from "react";
// import {
//   getAllCakes,
//   getNavMain,
//   mainInfoFill,
//   storyInfoFill,
// } from "../../services/service";

import { CakesServiceConsumer } from "../service-context";

export const withApiRequest = () => (Wrapped) => {
  return (props) => {
    return (
      <CakesServiceConsumer>
        {(serviceFunctions) => {
          return <Wrapped {...props} serviceFunctions={serviceFunctions} />;
        }}
      </CakesServiceConsumer>
    );
  };
};

// export const withApiRequest = (getData, Wrapped) => {
//   return class extends Component {
//     state = { data: [] };

//     getFunctions = {
//       getAllCakes,
//       getNavMain,
//       mainInfoFill,
//       storyInfoFill,
//     };

//     componentDidMount() {
//       this.getInfo();
//     }

//     getInfo() {
//       const getFunction = this.getFunctions[`${getData}`];

//       getFunction().then((data) => {
//         this.setState({ data });
//       });
//     }

//     render() {
//       const { data } = this.state;

//       return <Wrapped response={data} />;
//     }
//   };
// };
