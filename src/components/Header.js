import { Link } from 'react-router-dom';
function Header(props) {
  return (
    <header className="header">
      <div className="header__logo"></div>
      <div className="header__group">
      <p className="header__user">Examle20@yandex.ru</p>
      <Link to={props.isAuth ? '/sign-up': '/sign-in'} className="header__link" onClick={props.onLink}>{props.isAuth ? 'Регистрация': 'Войти'}</Link>
      </div>
    </header>
  )
}

export default Header;
