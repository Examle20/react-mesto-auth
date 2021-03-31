import React from "react";

function FailPopup(props) {

  const classNameOpen = props.isOpen ? 'popup_visible' : '';

  return(
    <div className={`popup  ${classNameOpen}`} onClick={props.onOverlayClose}>
      <div className="popup__container popup_success">
        <button type="button" className="popup__button-close" aria-label="Закрыть" onClick={props.onClose}></button>
        <div className="popup__success-image"></div>
        <h2 className="popup__title popup__title_notification">Что-то пошло не так! Попробуйте ещё раз.</h2>
      </div>
    </div>
  )
}

export default FailPopup;
