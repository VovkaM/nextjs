import React from 'react'

import Layout from '../../components/Layout'

import Banner from '../../components/Banner'




export default class Home extends React.Component {

  render() {

    return<Layout 
          title={'Shveikiv'}
          selectedProducts={this.props.productArr}
          removeFromCard={this.props.removeFromCard}
          handleCount={this.props.handleCount}
          addToCard={this.props.addToCard}
      >
      <Banner />
    </Layout>

  }

}