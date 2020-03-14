import React from 'react'
import ActiveLink from '../../ActiveLink'

import './index.scss'

const links = [
    {title: 'Магазин', link: '/products'},
    {title: 'Гастротури', link: '/gastro'},
    {title: 'Заходи', link: '/meetings'},
    {title: 'Контакти', link: '/contacts'},
    {title: 'Доставка', link: '/contacts'},
    {title: 'Оплата', link: '/contacts'}, 
]

export default class MobileMenu extends React.Component {


    render() {

        return <div className="mobileMenu">
            <div className="mobileMenu-close" onClick={this.props.showMobileMenu}>
                <img src='../../../static/images/close.png' alt=""close/>
            </div>
            {links.map((link,k) => {
                return <ActiveLink activeClassName="active"  onClick={this.props.showMobileMenu} href={link.link} key={k}><a>{link.title}</a></ActiveLink>
            })}
        </div>

    }

}