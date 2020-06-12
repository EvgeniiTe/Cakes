import React, { Component } from 'react';

import { SocialLinks } from '../social-links';
import { Logo } from '../logo';
import { CreateDiv } from '../create-div';
import { getHeaderEl } from '../../services/service';

export class HeaderTop extends Component {

    state={
        headerEl: []
    }

    componentDidMount() {
        this.getHeaderEl()
    }

    getHeaderEl() {
        getHeaderEl()
            .then(data => {
                this.setState({
                    headerEl: data
                });
            });
    }

    render() {
    
        const headerElMap = this.state.headerEl.map(({HeaderElClass, HeaderElChild}) => {
            switch (HeaderElChild){
                case "name":
                    return <CreateDiv
                                key={`${HeaderElClass}+${HeaderElChild}`}
                                className={HeaderElClass}
                                childEl={<p>Bohemian Cakes</p>} />
                    
                case "logo":
                    return <CreateDiv
                                key={`${HeaderElClass}+${HeaderElChild}`}
                                className={HeaderElClass}
                                childEl={<Logo height="280rem"/>} />
                    
                case "social":
                    return <CreateDiv
                                key={`${HeaderElClass}+${HeaderElChild}`}
                                className={HeaderElClass}
                                childEl={<SocialLinks />} />
                    
                default:
                    return null;
            }
        });
        
        return(
            <div className="header-footer-container header-container">
                {headerElMap}
            </div> 
        );
    }
};