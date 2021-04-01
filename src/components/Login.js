import Input from "./Input";
import React from 'react';
import * as auth from "../utils/auth";
import {withRouter} from 'react-router-dom';
function Login(props) {
  const [email, setEmail]  = React.useState('');
  const [password, setPassword] = React.useState( '');

  function handleChangeEmail(e) {
    setEmail(e.target.value)
  }

  function handleChangePassword(e) {
    setPassword(e.target.value)
  }


  function handleSubmit(e) {
    e.preventDefault();
    auth.authorize(email, password)
      .then((res) => {
        console.log(res)
        if(res.statusCode !== 401 ) {
          props.onEmail(email);
          props.onOut(true);
          props.onloggedIn(true);
          props.history.push('/my-profile');
        }
      })
      .catch( err => {
        console.log(err);
        props.onOpenFail(true);
      })
  }

  return (
    <div className="entry-container">
      <h2 className="entry-container__title">Вход</h2>
      <form action="" className="entry-container__form" onSubmit={handleSubmit} noValidate>
        <Input
          placeholder="Email"
          className="entry-container__input"
          value={email || ''}
          onChange={handleChangeEmail}
        />
        <Input
          placeholder="Пароль"
          className="entry-container__input"
          value={password || ''}
          onChange={handleChangePassword}
        />
        <button type="submit" className="entry-container__submit">Войти</button>
      </form>
    </div>
  )
}

export default withRouter(Login);
