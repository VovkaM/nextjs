import React from 'react';
import Layout from '../../components/Layout'

import {products} from '../../consts/products'

import './index.scss'


export default class Product extends React.Component {

    static async getInitialProps({query}) {
        return query
    }

    constructor(props) {
        super(props);
        this.state = {
            product: {}
        }
    }

    componentDidMount = () => {
        let id = Number(this.props.slug)
        let product = products.filter(item => {return item.id === id})
        this.setState({
            product: product[0]
        })
    }



    render() {

        const {product} = this.state
        const found = this.props.productArr.find(selectedProduct => selectedProduct.id === product.id);
        return <Layout 
                title={product.title}
                selectedProducts={this.props.productArr}
                removeFromCard={this.props.removeFromCard}
                handleCount={this.props.handleCount}
                addToCard={this.props.addToCard}
            >
            {!product.groupProduct ? 
                <SinglePropductPage product={product} found={found} addToCard={this.props.addToCard}/> 
                : 
                <GroupPropductPage product={product} found={found} addToCard={this.props.addToCard}/>}
        </Layout>
    }

}


class SinglePropductPage extends React.Component {

    render() {
        const {product, found} = this.props
        //const found = this.props.productArr.find(selectedProduct => selectedProduct.id === product.id);
        return <div className="productPage">
        <h1 className="productPage-title">{product.title}</h1>
        <div className="productPage-content">
            <div className="productPage-content-img">
                <img src={product.bottleImg} alt={product.title} className="productItem-imgWrapp-bottle" />
                <div className="productItem-imgWrapp-fruit" ><img src={product.fruitImg} alt={product.title}/></div>
                <img src='../static/images/product_bg.png' alt={product.title} className="productItem-imgWrapp-bg" />
                <img src="../static/images/shadow.png" alt="shadow" className="productItem-imgWrapp-shadow" />
            </div>
            <div className="productPage-content-description">
                <p>{product.description}</p>
                <p className="productPage-content-description-price">
                    Ціна: {product.price} грн. за {product.volume} мл.
                </p>
                <button className="productPage-content-description-button" onClick={() => this.props.addToCard(product.id)}>
                {!found ? 'додати в кошик' : 'додано ('+found.count+')'}
                </button>
            </div>
        </div>
    </div>

    }

}

class GroupPropductPage extends React.Component {

    render() {
        const {product, found} = this.props
        //const found = this.props.productArr.find(selectedProduct => selectedProduct.id === product.id);
        return <div className="groupProductPage">
        <h1 className="groupProductPage-title">{product.title}</h1>
        <div className="groupProductPage-content">
            <div className="groupProductPage-content-img">
                <img src={product.bottleImg} alt={product.title} className="groupProductItem-imgWrapp-bottle" />
                <div className="groupProductItem-imgWrapp-fruit" ><img src={product.fruitImg} alt={product.title}/></div>
            </div>
            <div className="groupProductPage-content-description">
                <p>{product.description}</p>
                <p className="groupProductPage-content-description-price">
                    Ціна: {product.price} грн. за {product.volume} мл.
                </p>
                <button className="groupProductPage-content-description-button" onClick={() => this.props.addToCard(product.id)}>
                {!found ? 'додати в кошик' : 'додано ('+found.count+')'}
                </button>
            </div>
        </div>
    </div>

    }

}