import React from 'react';

import './index.scss'


export default class Card extends React.Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }



    render() {
        let totalSumm = 0;
        return <div className="card">
            {this.props.products.length > 0 ? this.props.products.map((item,k) => {
                totalSumm += (Number(item.price) * Number(this.props.selectedProducts[k].count))
                return <div className="card-product" key={k}>
                    <h4 className="card-product-title">{item.title}</h4>
                    <div className="card-product-countDel">
                        <div className="card-product-countDel-counter">
                            <button className="card-product-countDel-counter-button" onClick={() => this.props.handleCount(k,'-')}>-</button>
                            <span>{this.props.selectedProducts[k].count}</span>
                            <button className="card-product-countDel-counter-button" onClick={() => this.props.handleCount(k,'+')}>+</button>
                        </div>
                        <button className="card-product-countDel-delete" onClick={() => this.props.removeFromCard(k)}><span>видалити</span></button>
                    </div>
                </div>
            }): <p className="card-empty">Кошик порожній</p>}
            {this.props.products.length > 0 && <button className="card-total">
                <p>Оформити: </p>
                <p>{totalSumm}грн</p>
            </button>}
        </div>

    }

}