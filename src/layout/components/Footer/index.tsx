import React from 'react'
import Advertisement from '../Advertisement'
import Logo from '../../../assets/img/marvel-logo.png'
import { LogoFacebook, LogoYoutube, LogoTwitter } from 'react-ionicons'
import './style.scss'

const Footer: React.FC = () => {
    return (
        <div className="footer-wrapper">
            <Advertisement />
            <div className="footer-wrapper__container">
                <div className="menu-block">
                    <ul>
                        <li>
                            <div className="menu-block__title">COMICS</div>
                            <ul>
                                <li>Release calendar</li>
                                <li>Marvel Unlimited</li>
                                <li>Redeem Digital Copy</li>
                                <li>hop Digital Comics</li>
                                <li>Print Subscriptions</li>
                                <li>Developer portal</li>
                            </ul>
                        </li>
                        <li>
                            <div className="menu-block__title">CHARACTERS</div>
                            <ul>
                                <li> Spider-Man</li>
                                <li>Avengers</li>
                                <li>Iron Man</li>
                                <li>Doctor Strange</li>
                                <li>Captain America</li>
                            </ul>
                        </li>
                        <li>
                            <div className="menu-block__title">KIDS</div>
                            <ul>
                                <li>Marvel HQ</li>
                                <li>Kids Games</li>
                                <li>Kides Videos</li>
                                <li>Kids Activities</li>
                            </ul>
                        </li>
                        <li>
                            <div className="menu-block__title">MARVEL</div>
                            <ul>
                                <li>Sign Up</li>
                                <li>Marvel Mastercard®</li>
                                <li>Marvel Insider</li>
                                <li>Help / FAQs</li>
                                <li>Email Preferences</li>
                                <li>About Marvel</li>
                                <li>Advertising</li>
                                <li>Internships</li>
                                <li>Careers</li>
                            </ul>
                        </li>
                        <li>
                            <div className="menu-block__title">INSIDER</div>
                            <ul>
                                <li>Join Today</li>
                                <li>Home</li>
                                <li>Activities</li>
                                <li>Rewards</li>
                                <li>Member Profile</li>
                                <li>FAQs</li>
                                <li>Marvel Insider Terms of Use</li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <div className="menu-brand">
                    <img className="menu-brand__logo" src={Logo} />
                    <ul>
                        <li>Terms of Use</li>
                        <li>Privacy Policy</li>
                        <li>Your California Privacy Policy</li>
                        <li>License Agreement</li>
                        <li>Interest-Based Ads</li>
                        <li>© 2018 Marvel</li>
                    </ul>
                    <div className="menu-brand__social-icons">
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
            </div>
        </div>
    )
}

export default Footer