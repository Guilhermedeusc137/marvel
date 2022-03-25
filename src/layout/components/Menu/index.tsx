import React from 'react'
import './style.scss'

interface MenuInterface {
    name: string
}

const menu: MenuInterface[] = [
    {
        name: 'New!'
    },
    {
        name: 'Comics'
    },
    {
        name: 'Characters'
    },
    {
        name: 'Clothes'
    },
    {
        name: 'Acessories'
    },
    {
        name: 'Toys'
    },
    {
        name: 'Home Décor'
    },
    {
        name: 'Entertainment'
    },
    {
        name: 'Collectibles'
    },
    {
        name: 'Sales'
    },
]

const Menu: React.FC = () => {
    return (
        <div className="menu-wrapper">
            <div className="menu-wrapper__container">
                <div className="menu-title">
                    SHOP
                </div>
                <div className="separator">
                    <div className="three-points three-points--white"></div>
                </div>
                <ul className="menu-list">
                    {menu.map((item: MenuInterface, index: number) => (
                        <li className="menu-list__item" key={index}>{item.name}</li>
                    ))}
                </ul>
            </div>

        </div>
    )
}

export default Menu