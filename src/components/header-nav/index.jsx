import React, { Component } from 'react';

import { getNavMain } from '../../services/service';

export class HeaderNav extends Component {
    state={
      navMain: [],
    }

    componentDidMount() {
      this.getNavInfo();
    }

    getNavInfo() {
      getNavMain()
        .then((data) => {
          this.setState({
            navMain: data,
          });
        });
    }

    render() {
      const { navMain } = this.state;

      const navMainMap = navMain.map(({ navMainWord, navMainRef }) => {
        return <li key={navMainWord}><a href={navMainRef}>{navMainWord}</a></li>;
      });

      return (
        <nav>
          <ul>
            {navMainMap}
          </ul>
        </nav>
      );
    }
}
