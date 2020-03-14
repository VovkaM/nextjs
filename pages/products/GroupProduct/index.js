import React from 'react';

import './index.scss'
 

export default class GroupProduct extends React.Component {

    addClick = (id) => {
        this.props.addToCard(id)
        let btn = document.getElementsByClassName('productItem-button-'+id)[0]
        btn.classList.add('added')
        setTimeout(() => {
            btn.classList.remove('added')
        },2000)
    }

    
    render() {

        const {item, selectedProducts} = this.props
        const found = selectedProducts.find(selectedProduct => selectedProduct.id === item.id);
        return <div className="groupProductItem">
            <h3 className="groupProductItem-title">{item.title}</h3>
            <div className="groupProductItem-imgWrapp">
                <img src={item.bottleImg} alt={item.title}  className="groupProductItem-imgWrapp-bottle"/>
                <div className="groupProductItem-imgWrapp-fruit" ><img src={item.fruitImg} alt={item.title}/></div>
            </div>
            <div className="groupProductItem-price">{item.volume}/{item.price} грн.</div>
            <button className={"productItem-button productItem-button-"+item.id} onClick={() => this.addClick(item.id)}>
                {!found ? 'додати в кошик' : 'додано ('+found.count+')'}
            </button>
        </div>

    }


}