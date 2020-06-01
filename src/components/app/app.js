import React, {Component} from 'react';

import './app.css';

import Header from '../header/header';
import MainInfo from '../main-info/main-info';
import Products from '../products/products';

export default class App extends Component {

    render() {

        return (
            <React.Fragment>
                <Header />
                <main>
                    <div className="main-container">
                        <MainInfo />
                        <Products />
                    </div>
                </main>
            </React.Fragment>
            
        );
    };
};