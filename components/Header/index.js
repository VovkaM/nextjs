import React from 'react'

import Link from 'next/link'
import ActiveLink from '../ActiveLink'

import Card from '../Card'

import MobileMenu from './MobileMenu'

import logo from '../../static/images/logo.png'

import './index.scss'

const links = [
    {title: 'Магазин', link: '/products'},
    {title: 'Гастротури', link: '/gastro'},
    {title: 'Заходи', link: '/meetings'},
    {title: 'Контакти', link: '/contacts'},
]

export default class Header extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            showCard: false,
            showMobMenu: false,
            scrollTop: 0
          }
    }

    showCard = () => {
        this.setState({
            showCard: !this.state.showCard
        })
    } 

    showMobileMenu = () => {
        this.setState({
            showMobMenu: !this.state.showMobMenu
        })
    }

    componentDidMount = () => {
        window.addEventListener('scroll', (event) => {
            const scrollY = window.scrollY
            if (scrollY > 0) {
                document.getElementsByTagName('header')[0].classList.add('fixed')
            } else {
                document.getElementsByTagName('header')[0].classList.remove('fixed')
            }
          })
    }

    render() {
        const {allProducts, selectedProducts} = this.props
        let products = [];
        let totalCount = 0
        for (let i = 0; i < selectedProducts.length; i++) {
            let item = allProducts.filter(product => {return product.id === selectedProducts[i].id})
            products.push(item[0])
            totalCount += selectedProducts[i].count
        }
        console.log(products)
        return <header className="header">
            <nav className="header-nav">
                {links.map((item,k) => {
                    return <ActiveLink activeClassName="active" href={item.link} key={k}><a>{item.title}</a></ActiveLink>
                })}
            </nav>
           <div className="header-logo">
                <img src={logo} alt="Logo" />
           </div>
           <div className="header-userPanel">
                <Link href="/"><a>Доставка</a></Link>
                <Link href="/"><a>Оплата</a></Link>
                <div className="header-userPanel-cardWrapp">
                    <button className="header-userPanel-cardWrapp-basket button" onClick={this.showCard}>
                        <span className="header-userPanel-cardWrapp-basket-text">кошик</span>
                        <img src='../../static/images/basket.png' alt="basket" className="header-userPanel-cardWrapp-basket-img"/> 
                        <span>{totalCount !== 0 && '+'+totalCount}</span
                    ></button>
                        {this.state.showCard && 
                            <Card products={products} 
                                selectedProducts={selectedProducts}
                                removeFromCard={this.props.removeFromCard}
                                handleCount={this.props.handleCount}
                            />
                        } 
                    <button className="header-userPanel-login button">
                        <span className="header-userPanel-login-text">вхід</span>
                        <img src="../../static/images/login.png" className="header-userPanel-login-img" alt="вхід"/>
                    </button>
                </div>
                <button className="header-userPanel-toggleButton" onClick={this.showMobileMenu}>
                    <img src="../../static/images/menu.png"/>
                </button>
           </div>
           {this.state.showMobMenu && <MobileMenu showMobileMenu={this.showMobileMenu}/>}
        </header>

    }


}