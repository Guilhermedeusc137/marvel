import React, { useEffect, useState } from 'react'
import Background from '../../../assets/img/background.png'
import Banner from '../../../assets/img/banner.png'
import { ChevronBackOutline, ChevronForwardOutline } from 'react-ionicons'
import './style.scss'

interface CarouselInterface {
    background: string
    title: string
    message: string
}

const carousel: CarouselInterface[] = [
    {
        background: Banner,
        title: 'XBOX GAME PASS ULTIMATE MEMBERS: ',
        message: 'GET THREE MONTHS FREE OF MARVEL UNLIM'
    },
    {
        background: Banner,
        title: 'SUPER HERO HIGH FASHION IS ON FULL DISPLAY',
        message: 'HELLFIRE GALA'
    },
    {
        background: Banner,
        title: 'AVENGERS FOREVER SETS THE STAGE FOR THE MULTIVERSE AVENGERS',
        message: 'INFINITY COMICS'
    },
    {
        background: Banner,
        title: 'XBOX GAME PASS ULTIMATE MEMBERS: ',
        message: 'GET THREE MONTHS FREE OF MARVEL UNLIM'
    },
    {
        background: Banner,
        title: 'SUPER HERO HIGH FASHION IS ON FULL DISPLAY',
        message: 'HELLFIRE GALA'
    },
    {
        background: Banner,
        title: 'AVENGERS FOREVER SETS THE STAGE FOR THE MULTIVERSE AVENGERS',
        message: 'INFINITY COMICS'
    },
]

const Carousel: React.FC = () => {
    const [slide, setSlide] = useState(1)
    const [pages, setPages] = useState<number[]>()

    const handlePages = () => {
        let count: number[] = []
        carousel.map((item, index) => (
            count = [...count, (index + 1)]
        ))
        if (count.length === carousel.length) {
            setPages(count)
        }
    }

    useEffect(() => {
        handlePages()
    }, [])
    return (
        <div className="carousel-wrapper">
            <div className="carousel-wrapper__container">
                <div className="carousel">
                    <div className="carousel__content" style={{ transform: `translate(-${(slide - 1) * 100}%, 0)` }}>
                        {carousel.map((item: CarouselInterface, index: number) => (
                            <img className="carousel__item" key={index} src={item.background} alt="" />
                        ))}
                    </div>
                    <div className="pages">
                        {pages?.map((item: number, index: number) => (
                            <div
                                key={index}
                                className={`pages__page${slide === item ? ' ' + 'pages__page--active' : ''}`}
                                onClick={() => setSlide(item)}>
                                {item}
                            </div>
                        ))}
                    </div>
                    <div
                        className="arrow arrow--left"
                        onClick={() => setSlide((slide - 1) <= 0 ? 1 : slide - 1)}>
                        <ChevronBackOutline cssClasses="arrow--icon" />
                    </div>
                    <div
                        className="arrow arrow--right"
                        onClick={() => setSlide((slide + 1) >= (pages?.length || 1) ? (pages?.length || 1) : slide + 1)}>
                        <ChevronForwardOutline cssClasses="arrow--icon" />
                    </div>
                </div>
                <div className="content">
                    <div className="content__title">{carousel[slide - 1].title}</div>
                    <div className="content__message">{carousel[slide - 1].message}</div>
                    <div className="button-container">
                        <button className="button">READ UP</button>
                    </div>
                </div>
            </div>

            <img className="carousel-wrapper__background" src={Background} alt="" />
        </div>
    )
}

export default Carousel