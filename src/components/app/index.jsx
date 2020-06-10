import React, {Component} from 'react';

import './app.css';

import Header from '../header';
import MainInfo from '../main-info';
import Products from '../products';
import MyStory from '../my-story';
import Footer from '../footer';

export class App extends Component {

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
