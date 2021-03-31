import Input from "./Input";
function Register() {
  return (
    <div className="entry-container">
      <h2 className="entry-container__title">Регистрация</h2>
      <form action="" className="entry-container__form">
        <Input placeholder="Email" className="entry-container__input"> </Input>
        <Input placeholder="Пароль" className="entry-container__input"> </Input>
        <button className="entry-container__submit">Регистрация</button>
      </form>
      <p className="entry-container__auth">Уже зарегистрированы? <a href="" className="entry-container__auth-link">Войти</a></p>
    </div>
  )
}

export default Register;
