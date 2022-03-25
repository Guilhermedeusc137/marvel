import React from 'react'
import './style.scss'

interface CardInterface {
    id: number
    thumbnail: string
    title: string
    description: string
}

interface Props {
    card: CardInterface
}

const Card: React.FC<Props> = ({ card }) => {
    return (
        <div className="card-wrapper">
            <div className="thumbnail">
                <img src={card.thumbnail} alt="" />
            </div>
            <div className="name">
                {card.title} #{card.id}
            </div>
        </div>
    )
}
export default Card