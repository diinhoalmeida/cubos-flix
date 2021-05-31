import React from 'react';
import "./style.css";

import { ReactComponent as BagIcon} from '../../assets/images/bag-icon.svg';
import { ReactComponent as PersonIllustation } from '../../assets/images/person-illustration.svg';
import { ReactComponent as CouponIcon } from '../../assets/images/coupon-icon.svg';
import { ReactComponent as PlusIcon } from '../../assets/images/plus-icon.svg';
import { ReactComponent as TrashIcon } from '../../assets/images/trash-icon.svg';
import { ReactComponent as MinusIcon } from '../../assets/images/minus-icon.svg';

export default function TheBag(props) {
    const bagEmpty = props.ourBag.length === 0;

    return (
        <div className="bag-box">
            <div className="bag-box__top">
                <BagIcon/>
                Sacola
            </div>
            {bagEmpty? (
            <div className="bag-box__carrinho">
                <h2>Sua sacola está vazia</h2>
                <p>Adicione filmes agora</p>
                <PersonIllustation/>
            </div>
            ) : (
            props.ourBag.map(movie => 
                <div className="bag_movie"> 
                    <div className="bag_movie_info">
                        <img className="movieImg" src={movie.img} alt ="x" />
                        <div className="bag_movie_details">
                            <span className="bag_movie_title">{movie.title}</span>
                            <span className="bag_movie_price">{movie.price}</span>
                        </div>
                    </div> 
                    <div className="bag_movie_actions">
                        <PlusIcon
                            onClick={() => props.addANewMovie(movie.title) }
                        />
                        <p>{movie.quantity}</p>
                        <MinusIcon
                            onClick={() => props.removeQuantityMovie(movie.title)}
                        />
                        <TrashIcon
                            onClick={() => props.removeAMovie(movie.title)}
                        />    
                    </div>  
                </div>    
                )
            )}
            <div className="bag-box__footer">
                <p>Insira seu cupom</p>
                <div className="bag-box_footer_input">
                    <input 
                    type="text"
                    placeholder="Cupom de desconto"/>
                    <div className="couponIcon">
                        <CouponIcon/>
                    </div>
                </div>
            </div>
        </div>
    )
}