import PopupWithForm from "./PopupWithForm";
import React from "react";
import Input from "./Input";
function AddPlacePopup(props) {
  const [title, setTitle] = React.useState('');
  const [link, setLink] = React.useState('');

  const handleChangeTitle = (e) => {
    setTitle(e.target.value)
  }

  const handleChangeLink = (e) => {
    setLink(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    props.onAddPlace(title, link)
  }

  React.useEffect(() => {
    setTitle('');
    setLink('');
  },[props.isOpen])
  return(
    <PopupWithForm
      name='add'
      isOpen={props.isOpen}
      onClose={props.onClose}
      onEscClose={props.onEscClose}
      onOverlayClose={props.onOverlayClose}
      buttonTitle={props.buttonTitle}
      onButtonActive={props.onButtonActive}
      isButtonActive={props.isButtonActive}
      onSubmit={handleSubmit}
      children={(
        <>
          <h2 className="popup__title popup__title_place">Новое место</h2>
          <label className="popup__form-field">
            <Input
              name='name'
              type='text'
              placeholder='Название'
              minLength='2'
              maxLength='30'
              value={title || ''}
              isOpen={props.isOpen}
              onChange={handleChangeTitle}
              isButtonActive={props.isButtonActive}
              onButtonActive={props.onButtonActive}
              className="popup__form-input"
              />
          </label>
          <label className="popup__form-field">
            <Input
              name='link'
              type='url'
              placeholder='Ссылка на картинку'
              value={link || ''}
              onChange={handleChangeLink}
              isOpen={props.isOpen}
              isButtonActive={props.isButtonActive}
              onButtonActive={props.onButtonActive}
              className="popup__form-input"
            />
          </label>
        </>
      )}
    />
  )
}

export default AddPlacePopup;
