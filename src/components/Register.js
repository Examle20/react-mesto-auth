import React from 'react'
import Input from "./Input";
import { Link, withRouter } from 'react-router-dom';
import * as auth from '../utils/auth';
function Register(props) {

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

    auth.register(email, password)
      .then((res) => {
        if(res.statusCode !== 400){
          props.history.push('/sign-in');
          console.log(res)

        }
      });
  }

  return (
    <div className="entry-container">
      <h2 className="entry-container__title">Регистрация</h2>
      <form action="" className="entry-container__form" onSubmit={handleSubmit}>
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
        <button className="entry-container__submit" type="submit">Регистрация</button>
      </form>
      <p className="entry-container__auth">Уже зарегистрированы? <Link to="sign-in" className="entry-container__auth-link">Войти</Link></p>
    </div>
  )
}

export default withRouter(Register);
