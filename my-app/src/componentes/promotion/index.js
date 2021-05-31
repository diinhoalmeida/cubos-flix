import React from 'react';

import './style.css';

import { ReactComponent as TimeIcon } from '../../assets/images/time-icon.svg';
import { ReactComponent as CircleIcon } from '../../assets/images/coupon-circle-icon.svg';
import MoneyImage from "../../assets/images/money.png";

// import MoneyImage from '../../assets/images/money.png';

export default function PromotionBanner(props) {
    return (
        <div className="promotion-banner">
            <div className="promotion-banner_coupon-container">
                <h1>APROVEITE AGORA</h1>
                <div className="promotion-banner_coupon-foot">
                    <CircleIcon/>
                    <span className="coupon-container__title">CUPOM: </span>
                    <span className="coupon-container__content">htmlnaoelinguagem</span>
                </div>
            </div>
            <div className="promotion-banner_line"></div>
            <div className="promotion-banner_timer-container">
                <h2>FINALIZA EM:</h2>
                <TimeIcon className="timeIcon"/>
                <span>00:05:00</span>
            </div>
            <img src={ MoneyImage } className="moneyImage" alt="Promotion Banner"/>
        </div>
    )
}