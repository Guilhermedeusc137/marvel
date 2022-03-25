import React, { useEffect } from 'react'
import Logo from '../../../assets/img/marvel-logo.png'
import { LogoFacebook, LogoYoutube, LogoTwitter, CartSharp } from 'react-ionicons'
import './style.scss'
import { Search } from '../../../components';

const Header: React.FC = () => {
    useEffect(() => {
        console.log('tá chamando aqui ó')
    }, [])
    return (
        <div className="header-wrapper">
            <div className="header">
                <div className="header__container">
                    <div className="header-brand">
                        <img className="header-brand__logo" src={Logo} />
                        <div className="header-brand__social-icons">
                            <LogoFacebook
                                cssClasses="social-icon facebook"
                                onClick={() => console.log('Facebook')}
                            />
                            <LogoYoutube
                                cssClasses="social-icon youtube"
                                onClick={() => console.log('Youtube')}
                            />
                            <LogoTwitter
                                cssClasses="social-icon twitter"
                                onClick={() => console.log('Twitter')}
                            />
                        </div>
                    </div>
                    <div className="header-action">
                        <div className="header-link">
                            <button className="header-link__button">WELCOME</button>
                            <div className="separator">
                                <div className="three-points"></div>
                            </div>
                            <button className="header-link__button">MY ACCOUNT</button>
                        </div>
                        <div className="header-search">
                            <Search placeholder="SEARCH MARVEL SHOP" />
                            <div className="separator">
                                <div className="three-points"></div>
                            </div>
                            <CartSharp
                                cssClasses="cart-icon"
                                onClick={() => console.log('Carrinho')}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header