import React from 'react'

import Link from 'next/link'
import './index.scss'


class ProductItem extends React.Component {

 
    render() {

        const {item, selectedProducts} = this.props
        const found = selectedProducts.find(selectedProduct => selectedProduct.id === item.id);
        return <div className="productItem">
            <h3 className="productItem-title">
                <Link 
                href={"/product?slug="+item.slug} 
                as={"/product/"+item.slug+""}
                ><a>{item.title}</a></Link>
            </h3>
            <Link href={"/product?slug="+item.slug} as={"/product/"+item.slug+""}>
                <a>
                    <div className="productItem-imgWrapp">
                        <img src={item.bottleImg} alt={item.title} className="productItem-imgWrapp-bottle" />
                        <div className="productItem-imgWrapp-fruit" ><img src={item.fruitImg} alt={item.title}/></div>
                        <img src='../../static/images/product_bg.png' alt={item.title} className="productItem-imgWrapp-bg" />
                        <img src="../../static/images/shadow.png" alt="shadow" className="productItem-imgWrapp-shadow" />
                        <div className="productItem-imgWrapp-alcohol">{item.alcohol}%</div>
                    </div>
                </a>
            </Link>
            <div className="productItem-price">{item.volume}/{item.price} грн.</div>
            <button className="productItem-button" onClick={() => this.props.addToCard(item.id)}>
                {!found ? 'додати в кошик' : 'додано ('+found.count+')'}
            </button>
    </div>

    }

}

export default ProductItem