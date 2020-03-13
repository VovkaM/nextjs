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
            {links.map((link,k) => {
                return <ActiveLink activeClassName="active" href={link.link} key={k}><a>{link.title}</a></ActiveLink>
            })}
        </div>

    }

}