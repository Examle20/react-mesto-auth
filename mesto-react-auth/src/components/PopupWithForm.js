import React from "react";
function PopupWithForm(props) {
  const classNameOpen = props.isOpen ? 'popup_visible' : '';
  const buttonInactive = props.isButtonActive ? '' : 'popup__button-save_inactive'
  const [buttonDisabled, setButtonDisabled] = React.useState(false);
  const elementsRef = React.useRef()

  React.useEffect(() => {
    if(elementsRef.current && elementsRef.current.checkValidity()) {
      props.onButtonActive(true)
      setButtonDisabled(false);
    }else{
      props.onButtonActive(false)
      setButtonDisabled(true);
    }
  },)

  React.useEffect(() => {
    props.onEscClose(props.isOpen);
  },[props.isOpen, props.onEscClose])


  return(
    <div className={`popup popup_validation popup_${props.name} ${classNameOpen}`} onClick={props.onOverlayClose}>
      <div className="popup__container">
        <button type="button" className="popup__button-close popup__button-close_edit" aria-label="Закрыть" onClick={props.onClose}></button>
        <form ref={elementsRef} action="pages/index.js" className="popup__form" name={`form_${props.name}`} noValidate onSubmit={props.onSubmit}>
          {props.children}
          <button type="submit" disabled={buttonDisabled} className={`popup__button-save popup__button-save_${props.name} ${buttonInactive} ${props.buttonTitle.load && 'popup__button-save_loading'}`} aria-label="Сохранить">{props.buttonTitle.title}</button>
        </form>
      </div>
    </div>
  )
}

export default PopupWithForm;
