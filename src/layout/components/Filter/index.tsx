import React, { useState } from 'react'
import { useSelector, RootStateOrAny,useDispatch } from 'react-redux'
import { point } from '../../../global/point/actions'
import './style.scss'

interface FilterInterface {
    name: string
    value: string
}

const filter: FilterInterface[] = [
    {
        name: 'SERIES',
        value: 'series'
    },
    {
        name: 'CHARACTERS',
        value: 'characters'
    },
    {
        name: 'CREATORS',
        value: 'creators'
    },
]

const Filter: React.FC = () => {
  const dispatch = useDispatch()
  const pointContent = useSelector((state: RootStateOrAny) => state.pointReducer.point)

    const handleFilter = (value: string) => {
        dispatch(point(value))
    }

    return (
        <div className="filter-wrapper">
            <div className="filter-wrapper__container">
                <div className="filter">
                    <div className="filter__title">
                        BROWSE BY
                    </div>
                    {filter.map((item: FilterInterface, index: number) => (
                        <div 
                        key={index} 
                        className={`filter__item${item.value === pointContent ? ' ' + 'filter__item--active' : ''}`}
                        onClick={() => handleFilter(item.value)}>
                            {item.name}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Filter