import PopupWithForm from "./PopupWithForm";
import React from "react";
import Input from "./Input";
function EditAvatarPopup(props) {

const [link, setLink] = React.useState('');
  function handleChangeLink(e) {
    setLink(e.target.value)
  }
  function handleSubmit(e) {
    e.preventDefault();
    props.onUpdateAvatar(link)
  }
  React.useEffect(() => {
    setLink('');
  },[props.isOpen])
  return(
    <PopupWithForm
      name='avatar'
      isOpen={props.isOpen}
      onClose={props.onClose}
      onEscClose={props.onEscClose}
      onOverlayClose={props.onOverlayClose}
      buttonTitle={props.buttonTitle}
      isButtonActive={props.isButtonActive}
      onButtonActive={props.onButtonActive}
      onSubmit={handleSubmit}
      children={(
        <>
          <h2 className="popup__title popup__title_place">Обновить аватар</h2>
          <label className="popup__form-field">
            <Input
              name='avatar'
              type='url'
              placeholder='Ссылка на картинку'
              value={link || ''}
              isOpen={props.isOpen}
              onChange={handleChangeLink}
              isButtonActive={props.isButtonActive}
              onButtonActive={props.onButtonActive}
            />
          </label>
        </>
      )}
    />
  )
};

export default EditAvatarPopup;
