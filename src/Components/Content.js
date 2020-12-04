import React, { Component } from 'react'
import Carousel from './Carousel'
import ProductList from './ProductList'
import Sidebar from './Sidebar'

export default class extends Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-3">
                        <Sidebar />
                    </div>
                    <div className="col-9">
                        <div className="margin-right:20px">
                            <Carousel />
                            <ProductList />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
