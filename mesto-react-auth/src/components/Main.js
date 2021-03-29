import React from "react";
import Card from "./Card";
import {CurrentUserContext} from "../contexts/CurrentUserContext";
function Main(props) {

  const currentUser = React.useContext(CurrentUserContext)

  return(
    <main>
      <section className="profile">
        <div className="profile__user">
          <div className="profile__photo-group" onClick={props.onEditAvatar}>
            <img
              src={currentUser.avatar}
              alt="Изображение профиля"
              className="profile__photo"
            />
          </div>
          <div className="profile__info">
            <div className="profile__main-info">
              <h1 className="profile__title">{currentUser.name}</h1>
              <button type="button" className="profile__button-edit" aria-label="Редактировать" onClick={props.onEditProfile}></button>
            </div>
            <p className="profile__subtitle">{currentUser.about}</p>
          </div>
          <button type="button" className="profile__button-add" aria-label="Добавить" onClick={props.onAddPlace}></button>
        </div>
      </section>

      <section className="elements">
        <div className={`${props.isLoading && 'loading'}`}></div>
        <ul className="elements__list">
          {props.cards.map((item) =>(
            <Card
              key={item._id}
              card={item}
              onCardLike = {props.onCardLike}
              onCardDelete = {props.onCardDelete}
              onCardClick={props.onCardClick}
              onBasketClick={props.onBasketClick}
            />
          ))}
        </ul>
      </section>
    </main>
  )
}

export default Main;
