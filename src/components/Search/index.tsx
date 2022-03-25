import React from 'react'
import { SearchOutline } from 'react-ionicons'
import './style.scss'

type Props = React.InputHTMLAttributes<HTMLInputElement>

const Search: React.FC<Props> = ({ ...rest }) => {
    return (
        <label className="search-wrapper">
            <input type="text" {...rest} />
            <SearchOutline
                cssClasses="search-icon"
            />
        </label>
    )
}

export default Search