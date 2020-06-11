import React, { Component } from 'react';

import './products.css';

import {ProductsList} from '../products-list';
import {Product} from '../product';
import {Service} from '../../services/service';

export class Products extends Component {

    state ={
        itemId: null,
        dataList: []
    };

    service = new Service();

    componentDidMount() {
        this.getDataList();
    }

    itemSelected = (itemId) => {
        this.setState({ itemId });
    }

    getDataList() {
        this.service.getAllCakes()
        .then((data) => {                
            this.setState({
                dataList: data
            });
        });
    }


    render() {   
        const { itemId, dataList } = this.state;
    
        return(
            <section id="Products" className="products">
                <ProductsList 
                    data={dataList}
                    itemSelected={this.itemSelected} />
                <Product itemId={itemId}/>
            </section>
        );
    }
}
