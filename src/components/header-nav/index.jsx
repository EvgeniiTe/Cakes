import React, { Component } from 'react';

import { getNavMain } from '../../services/service';

export class HeaderNav extends Component {

    state={
        navMain: []
    }
  
    getNavInfo() {
        getNavMain()
            .then(data => {
                this.setState({
                    navMain: data
                });
            });
    }

    componentDidMount() {
        this.getNavInfo();
    }

    render() {

        const { navMain } = this.state;

        const navMainMap = navMain.map(({navMainWord, navMainRef}) => {
            return <li key={navMainWord}><a href={navMainRef}>{navMainWord}</a></li>
        });
    
        return(
            <nav>
                <ul>
                    {navMainMap}
                </ul>
            </nav>
        );
    }
};