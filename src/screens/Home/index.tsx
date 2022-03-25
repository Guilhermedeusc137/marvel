import React, { useEffect, useState } from 'react'
import { useSelector, RootStateOrAny } from 'react-redux'
import { Card } from './components'
import api from './service'
import './style.scss'

interface CardInterface {
    id: number
    thumbnail: string
    title: string
    description: string
}

const Home: React.FC = () => {
    const point = useSelector((state: RootStateOrAny) => state.pointReducer.point)

    const [loading, setLoading] = useState(false)
    const [data, setData] = useState<CardInterface[]>([])
    const [limit, setLimit] = useState(12)
    const fetchData = () => {
        setLoading(true)
        const params = {
            limit: limit
        }
        api.marvel(params, point)
            .then((res: any) => {
                console.log('res', res.data.data.results)
                setData(res.data.data.results.map((item: any) => {
                    return {
                        id: item.id,
                        thumbnail: `${item.thumbnail.path}.${item.thumbnail.extension}`,
                        title: item.title || item.name || item.firstName,
                        description: item.description
                    }
                }))
                setLoading(false)
            })
            .catch(err => console.log(err))
    }
    useEffect(() => {
        fetchData()
    }, [limit, point])

    useEffect(() => {
        console.log(data)
    }, [data])
    return (
        <div className="home-wrapper">
            <div className="home-wrapper__container">
                {
                    !loading ?
                        <React.Fragment>
                            {data?.map((item: any, index: number) => (
                                <Card key={index} card={item} />
                            ))}
                            <div className="button-container">
                                <button className="button" onClick={() => setLimit(limit === 20 ? 12 : 20)}>{limit === 20 ? 'LOAD LESS' : 'LOAD MORE'}</button>
                            </div>
                        </React.Fragment>
                        :
                        <div className="loading">
                            <p className="loading__spinning">Carregando... <span className="spinning-loader"></span></p>
                        </div>
                }

            </div>
        </div>
    )
}

export default Home