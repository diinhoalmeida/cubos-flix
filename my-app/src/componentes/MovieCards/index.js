import React from 'react';
import "./style.css";

import { ReactComponent as Star } from '../../assets/images/star.svg';
import { ReactComponent as GoldenStar } from '../../assets/images/golden-star.svg';

export default function MovieCard(props) {
    const movie = props.movie;

    const background = `linear-gradient(rgba(0, 0, 0, 0.3) 100%, rgba(0, 0, 0, 0.3)100%), url('${movie.backgroundImg}') no-repeat center / cover`;


    return (
        <div className="movie-card" style={{ background }}>
            <div className="movie-card-infos">
                <Star 
                    className={`star ${movie.isStarted? 'active': 'no-active'}`}
                    onClick={ () => props.handleStarredStar(movie.title) }
                />
                <div className="movie-info">
                    <h3>{movie.title}</h3>
                    <div className={"movie-stars"}>
                        <GoldenStar/>
                        {movie.starsCount}
                    </div>               
                </div>
            </div>
            <button 
                className="price-button movie"
                onClick={() => props.handleMovieBuy(props.movie)}
            >
                <div className="inside-button">
                    <span>Sacola</span>
                    <span className="price">{`R$ ${movie.price}`}</span>
                </div>
            </button>
        </div>
    )
}
