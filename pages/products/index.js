import React from 'react'

import Layout from '../../components/Layout'
import Header from '../../components/Header'
import Banner from '../../components/Banner'

import ProductItem from './ProductItem'
import GroupProduct from './GroupProduct'

import {products} from '../../consts/products'

import './index.scss'


export default class Products extends React.Component {


  constructor(props) {
    super(props) 
      this.state = {
        productArr: []
      }
  }

  componentDidMount = () => {
    this.setState({
      productArr: localStorage.getItem('inCard') === null ? [] : JSON.parse(localStorage.getItem('inCard'))
    })
  }


  render() {

    return <Layout 
            title='Shveikiv'
            selectedProducts={this.props.productArr}
            removeFromCard={this.props.removeFromCard}
            handleCount={this.props.handleCount}
            addToCard={this.props.addToCard}
           >
      <Banner />
      <div className="productList">
        {products.map((item,k) => {
            if (k !== 7) {
              return <>
                <ProductItem key={k} item={item} addToCard={this.props.addToCard} selectedProducts={this.props.productArr}/>
                {(k+1)%3 === 0 && <div className="productList-line"></div>}
              </>
            } else {
              return <GroupProduct key={k} item={item} addToCard={this.props.addToCard} selectedProducts={this.props.productArr}/>
            }
        })}
      </div> 
    </Layout>

  }

}