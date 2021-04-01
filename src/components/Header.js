import { Link } from 'react-router-dom';
import React from "react";
function Header(props) {

  const[linkTitle, setLinkTitle] = React.useState('')

  const handleLinkTitle = () => {
    if(props.isOut){
      setLinkTitle('Выйти')
    }else {
      return props.isAuth ? (setLinkTitle('Регистрация')): (setLinkTitle('Войти'));
    }
  }

  const sigOut = () => {
    localStorage.removeItem('jwt')
    props.onOut(false);
    props.onClearEmail('');
  }

  const handleLinkPress = () => {
    if(props.isAuth){
      sigOut()
    }else {
      props.onLink();
    }
  }

  React.useEffect(() => {
    handleLinkTitle();
  },[props.isAuth, props.isOut])

  return (
    <header className="header">
      <div className="header__logo"></div>
      <div className="header__group">
        <p className="header__user">{props.email}</p>
        <Link to={(props.isAuth && !props.isOut) ? (props.isAuth ? '/sign-up': '/sign-in'): '/sign-in'} className={`header__link ${props.isOut && 'header__link_out'}`} onClick={handleLinkPress}>{linkTitle}</Link>
      </div>
    </header>
  )
}

export default Header;
