import React from 'react'
import Head from '../Head'
import Header from '../Header'
import Footer from '../Footer'

import {products} from '../../consts/products'

import './index.scss'

export default class Layout extends React.Component {

    constructor(props) {
        super(props) 
        this.state = {
            count: 1
        }
    }

    render() {

        return <div className="appLayout" style={{background: 'url(../../static/body_bg.png)'}}>
            <Head title={this.props.title} />
            <div className="container">
                <Header 
                    selectedProducts={this.props.selectedProducts} 
                    allProducts={products}
                    removeFromCard={this.props.removeFromCard}
                    handleCount={this.props.handleCount}
                />
                {this.props.children}
            </div>
            <Footer />
            <style jsx global>{`
			      @font-face {
                    font-family: 'Reforma';
                    src: url('../../static/fonts/ReformaGroteskMediumC.ttf'); 
                    font-weight: bold;
                    font-style: normal;
                    font-display: auto;
                  }
				`}</style>
        </div>

    }

}
