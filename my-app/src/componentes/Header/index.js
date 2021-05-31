import "./style.css";

import { ReactComponent as Logo } from "../../assets/images/logo.svg";
import { ReactComponent as BookmarkIcon } from "../../assets/images/bookmark-icon.svg";
import { ReactComponent as PromotionIcon } from "../../assets/images/promotion-icon.svg";
import profileImg from "../../assets/images/profile.jpg";

import SearchInput from "../searchinput/index.js";

function Header(props) {
    return (
        <header className="header">
            <Logo className="header-logo"/>
            <SearchInput
                setMovieTitleFilter={props.setMovieTitleFilter}
            />
            <div className="header-item divs-header">
                <BookmarkIcon/>
                <a href="www.google.com">Favoritos</a>
            </div>
            <div className="header-item divs-header">
                <PromotionIcon/>
                <a href="www.google.com">Promoções</a>
            </div>
            <div className="header-item divs-header">
                Bem vindo, Dina.
                <img 
                    className="item-conainter-img"
                    src={ profileImg }
                    alt = "profile"
                />
            </div>
        </header>
    );
}

export default Header;