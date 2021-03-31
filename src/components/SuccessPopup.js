import React from "react";

function SuccessPopup(props) {

  const classNameOpen = props.isOpen ? 'popup_visible' : '';

  return(
    <div className={`popup  ${classNameOpen}`} onClick={props.onOverlayClose}>
      <div className="popup__container popup_success">
        <button type="button" className="popup__button-close" aria-label="Закрыть" onClick={props.onClose}></button>
        <div className="popup__success-image"></div>
        <h2 className="popup__title popup__title_notification">Вы успешно зарегистрировались!</h2>
      </div>
    </div>
  )
}

export default SuccessPopup;
