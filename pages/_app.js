import App, { Container } from 'next/app'
import Head from 'next/head'
import React from 'react'

import Router from 'next/router'

export default class MyApp extends App {
    
    constructor(props) {
        super(props) 
          this.state = {
            productArr: []
          }
      }
  
    static async getInitialProps({ Component, ctx }) {
        let pageProps = {}
        if (Component.getInitialProps) {
          pageProps = await Component.getInitialProps(ctx)
        }
        return { pageProps }
    }




  componentDidMount = () => {
    this.setState({
      productArr: localStorage.getItem('inCard') === null ? [] : JSON.parse(localStorage.getItem('inCard'))
    })
    const {pathname} = Router
    if(pathname == '/' ){
       Router.push('/products')
    }
  }


  addToCard = (id) => {
    let productArr = this.state.productArr;
    const found = productArr.find(item => item.id === id);
    if (!found) {
      let productItem = {id: null, count: 0};
      productItem.id = id;
      productItem.count = 1
      productArr.push(productItem)
    } else {
      let position = productArr.indexOf(found)
      found.count =  found.count + 1
      productArr[position] = found
    }
    this.setState({
      productArr
    })
    localStorage.setItem('inCard', JSON.stringify(productArr))

    let card = document.getElementsByClassName('header-userPanel-cardWrapp-basket')[0]
    card.classList.add('added')
    setTimeout(() => {
      card.classList.remove('added')
    },2000)

  }

  removeFromCard = (k) => {
    let productArr = this.state.productArr;
    productArr.splice(k,1)
    this.setState({
      productArr
    })
    localStorage.setItem('inCard', JSON.stringify(productArr))
  }

  handleCount = (k, action) => {
    let productArr = this.state.productArr;
    let item = productArr[k]
    if (action === '+') {
      item.count += 1
      productArr[k] = item
    } else {
      if (item.count === 1) {
        this.removeFromCard(k)
      } else {
        item.count -= 1
        productArr[k] = item
      }
    }
    this.setState({productArr})
    localStorage.setItem('inCard', JSON.stringify(productArr))
  }


  render() {
    const { Component, pageProps } = this.props
    //console.log('pageProps', pageProps)
    return <Component 
                productArr={this.state.productArr}
                addToCard={this.addToCard}
                removeFromCard={this.removeFromCard}
                handleCount={this.handleCount}
                {...pageProps}  
           />
  }
}