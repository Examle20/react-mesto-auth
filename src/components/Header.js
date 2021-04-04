import { Link } from 'react-router-dom';
import React from "react";
function Header(props) {

  const [linkTitle, setLinkTitle] = React.useState('');
  const [mobileMenu, setMobileMenu] = React.useState(false);

  console.log(mobileMenu)
  const showMobileMenu = () => {
    setMobileMenu(!mobileMenu);
  }

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
    props.onloggedIn(false);
  }

  const handleLinkPress = () => {
    if(props.isOut){
      sigOut()
    }else {
      props.onLink();
    }
  }

  React.useEffect(() => {
    if(props.loggedIn){
      props.onOut(true);
    }
  },[props.loggedIn])

  React.useEffect(() => {
    handleLinkTitle();
    setMobileMenu(false);
  },[props.isAuth, props.isOut])


  return (

    <header className="header">

      <div className={`header__group_mobile ${mobileMenu && 'header__group_visible'} ${!props.loggedIn && 'header__group_hidden'}`}>
        <p className="header__user header__user_mobile">{props.email}</p>
        <Link to={(props.isAuth && !props.isOut) ? (props.isAuth ? '/sign-up': '/sign-in'): '/sign-in'} className={`header__link ${props.isOut && 'header__link_out'}`} onClick={handleLinkPress}>{linkTitle}</Link>
      </div>

      <div className={`header__mobile ${!props.loggedIn && 'header__group_hidden'}`}>
        <div className="header__logo"></div>
        <button className="header__button-mobile" onClick={showMobileMenu}></button>
      </div>

      <div className={`header__desktop ${!props.loggedIn && 'header__desktop_visible'}`}>
        <div className="header__logo"></div>
        <div className="header__group">
          <p className="header__user">{props.email}</p>
          <Link to={(props.isAuth && !props.isOut) ? (props.isAuth ? '/sign-up': '/sign-in'): '/sign-in'} className={`header__link ${props.isOut && 'header__link_out'}`} onClick={handleLinkPress}>{linkTitle}</Link>
        </div>
      </div>
    </header>
  )
}

export default Header;
