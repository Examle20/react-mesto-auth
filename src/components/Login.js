import Input from "./Input";

function Login() {
  return (
    <div className="entry-container">
      <h2 className="entry-container__title">Вход</h2>
      <form action="" className="entry-container__form" noValidate>
        <Input placeholder="Email" className="entry-container__input"> </Input>
        <Input placeholder="Пароль" className="entry-container__input"> </Input>
        <button className="entry-container__submit">Войти</button>
      </form>
    </div>
  )
}

export default Login;
