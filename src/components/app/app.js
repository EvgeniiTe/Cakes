import React, {Component} from 'react';

import './app.css';

import Header from '../header/header';
import MainInfo from '../main-info/main-info';
import Products from '../products/products';
import MyStory from '../my-story/my-story';
import Footer from '../footer/footer';

export default class App extends Component {

    render() {

        return (
            <React.Fragment>
                <Header />
                <main>
                    <div className="main-container">
                        <MainInfo />
                        <Products />
                        <MyStory />
                    </div>
                </main>
                <Footer />
            </React.Fragment>
            
        );
    }
}