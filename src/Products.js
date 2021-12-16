import React, { Component } from 'react'
import Filters from './Filters'
import ProductTable from './ProductTable'
import ProductForm from './ProductForm'

let PRODUCTS = {
	'1': { id: 1, category: 'Electronic', price: '$899.99', name: 'TV' },
	'2': { id: 2, category: 'Electronic', price: '$1,000', name: 'Cellphone' },
	'3': { id: 3, category: 'Clothing', price: '$45.99', name: 'Levi Jeans' },
	'4': { id: 4, category: 'Clothing', price: '$19.99', name: 'Polo' },
	'5': { id: 5, category: 'Furniture', price: '$100', name: 'Tv Stand' },
	'6': { id: 6, category: 'Cosmetic', price: '$50', name: 'Lotion' }
};

class Products extends Component {
    constructor(props) {
        super(props)
        this.state = {
            filterText: '',
            products: PRODUCTS
        }
        this.handleFilter = this.handleFilter.bind(this)
        this.handleDestroy = this.handleDestroy.bind(this)
        this.handleSave = this.handleSave.bind(this)
    }

    handleFilter(filterInput) {
        this.setState(filterInput)
    }

    handleSave(product) {
        if (!product.id) {
            product.id = new Date().getTime()
        }
        this.setState((prevState) => {
            let products = prevState.products
            products[product.id] = product
            return { products }
        })
    }

    handleDestroy(productId) {
        this.setState((prevState) => {
            let products = prevState.products
            delete products[productId]
            return { products }
        });
    }

    render () {
        return (
            <div>
                <h1>My Inventory</h1>
                <Filters 
                    onFilter={this.handleFilter}></Filters>
                <ProductTable 
                    products={this.state.products}
                    filterText={this.state.filterText}
                    onDestroy={this.handleDestroy}></ProductTable>
                <ProductForm
                    onSave={this.handleSave}></ProductForm>
            </div>
        )
    }
}

export default Products