import PopupWithForm from "./PopupWithForm";
import React from "react";
import {CurrentUserContext} from "../contexts/CurrentUserContext";
import Input from "./Input";
function EditProfilePopup(props) {

  const [name, setName]  = React.useState('');
  const [description, setDescription] = React.useState( '');
  const currentUser = React.useContext(CurrentUserContext);

  function handleChangeName(e) {
   setName(e.target.value)
  }

  function handleChangeDescription(e) {
    setDescription(e.target.value)
  }

  React.useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser, props.isOpen]);

  function handleSubmit(e) {
    e.preventDefault();
    props.onUpdateUser({
      name: name.trim(),
      about: description.trim(),
    });
  }

  return(
    <PopupWithForm
      name='edit'
      isOpen={props.isOpen}
      onClose={props.onClose}
      onEscClose={props.onEscClose}
      onOverlayClose={props.onOverlayClose}
      buttonTitle={props.buttonTitle}
      onSubmit={handleSubmit}
      isButtonActive={props.isButtonActive}
      onButtonActive={props.onButtonActive}
      children={(
      <>
        <h2 className="popup__title">Редактировать профиль</h2>
        <label className="popup__form-field">
          <Input
            name='name'
            type='text'
            placeholder='Имя'
            minLength='2'
            maxLength='40'
            xName={name}
            value={name || ''}
            onChange={handleChangeName}
            isOpen={props.isOpen}
            isButtonActive={props.isButtonActive}
            onButtonActive={props.onButtonActive}
            />
        </label>
        <label className="popup__form-field">
          <Input
            name='about'
            type='text'
            placeholder='Имя'
            minLength='2'
            maxLength='200'
            xName={description}
            value={description || ''}
            onChange={handleChangeDescription}
            isOpen={props.isOpen}
            isButtonActive={props.isButtonActive}
            onButtonActive={props.onButtonActive}
          />
        </label>
      </>
    )}
    />
  )
}

export default EditProfilePopup;
