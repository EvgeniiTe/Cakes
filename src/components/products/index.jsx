import React, { Component } from 'react';

import './products.css';

import { ProductsList } from '../products-list';
import { Product } from '../product';
import { getAllCakes } from '../../services/service';

export class Products extends Component {

    state = {
        itemId: null,
        dataList: []
    };

    getDataList() {
        getAllCakes()
            .then((data) => {                
                this.setState({
                    dataList: data
                });
            });
    }

    componentDidMount() {
        this.getDataList();
    }

    selectItem = (itemId) => {
        this.setState({ itemId });
    }

    render() {   
        const { itemId, dataList } = this.state;
    
        return(
            <section id="Products" className="products">
                <ProductsList 
                    data={dataList}
                    selectItem={this.selectItem} />
                <Product itemId={itemId}/>
            </section>
        );
    }
}
