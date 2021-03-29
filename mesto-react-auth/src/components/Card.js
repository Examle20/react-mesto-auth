import React from "react";
import {CurrentUserContext} from "../contexts/CurrentUserContext";

function Card(props) {

  const currentUser = React.useContext(CurrentUserContext)
  const card = props.card;
  const isOwn = card.owner._id === currentUser._id;
  const basketButtonClassName = (
    `elements__basket ${isOwn ? '': 'elements__basket_hidden'}`
  )
  const isLiked = card.likes.some(i => i._id === currentUser._id);
  const cardLikeButtonClassName = (`elements__like ${isLiked ?'elements_like_active' : '' }`)
  const handleCardClick = () => {
    props.onCardClick(card)
  }

  const handleLikeClick = () => {
    props.onCardLike(card);
  }


  const handleDeleteClick = () => {
    props.onBasketClick();
    props.onCardDelete(card);
  }

  return(
    <li className="elements__item" >
      <div style={{ backgroundImage: `url(${card.link})`, backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundSize:"cover" }}
           alt="Что-то с ссылкой на изображение"
           className="elements__image"
           onClick={handleCardClick}
      />
      <button type="button" className={basketButtonClassName} onClick={handleDeleteClick}></button>
      <div className="elements__group">
        <h2 className="elements__title">{card.name}</h2>
        <div className="elements__group-like">
          <button type="button" className={cardLikeButtonClassName} onClick={handleLikeClick} aria-label="Нравится"></button>
          <p className="elements__like-count">{card.likes.length}</p>
        </div>
      </div>
    </li>
  )
};

export default Card;


