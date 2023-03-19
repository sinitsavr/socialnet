import React from 'react';
import style from './Header.module.css';
import logo from './../../assets/imeges/SVR.png'
import { NavLink } from 'react-router-dom';

const Header = (props) => {
 
  return (
      <header className={style.header}>
        <img alt='' className={style.img} src={logo}/>
        <div className={style.lohinBlock}>
          {props.isAuth ? <span className={style.loginBlockIsAuth}>{props.login} - <button onClick={props.logout}> Log out.</button></span> : <NavLink className={style.loginBlockNotAuth} to={'/login'}>Login</NavLink>}
        </div>
      </header>
  );
}

export default Header;
