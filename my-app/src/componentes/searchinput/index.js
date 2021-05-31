import { useState } from 'react';
import { ReactComponent as SearchIcon} from "../../assets/images/search-icon.svg";

import "./style.css";

export default function SearchInput(props) {
    const [search, setSearch] = useState('');
    function handleKeyDown(e) {
        if (e.key !== 'Enter') return;

        props.setMovieTitleFilter(search);
    }
    return (
        <div className="search-container">
            <input 
                className="search-container__input"
                type="text"
                placeholder="Pesquisar filmes..."
                onChange={ e => setSearch(e.target.value) }
                value={ search }
                onKeyDown={ e => handleKeyDown(e)}
            />
            <div className="search-container__icon"
                onClick={ () => props.setMovieTitleFilter(search) }>
                <SearchIcon
                    className="search-container__icon__image"
                />
            </div>
        </div>
    )
}