import React from "react";

function InfoTooltip(props) {
  const classNameOpen = props.isOpen ? 'popup_visible' : '';
  React.useEffect(() => {
    props.onEscClose(props.isOpen);
  },[props.isOpen, props.card, props.onEscClose])
  return(
    <div className={`popup  ${classNameOpen}`} onClick={props.onOverlayClose} onClick={props.onOverlayClose}>
      <div className="popup__container popup_notification">
        <button type="button" className="popup__button-close" aria-label="Закрыть" onClick={props.onClose}></button>
        <img src={props.link} className="popup__success-image"></img>
        <h2 className="popup__title popup__title_notification">{props.message}</h2>
      </div>
    </div>
  )
}

export default InfoTooltip;
