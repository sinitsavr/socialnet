import React from 'react';
import style from './Header.module.css';
import logo from './../../assets/imeges/SVR.png'
import { NavLink } from 'react-router-dom';
const Header = (props) => {
  return (
    <div >
    <div className={style.appWrapper}>
      <header className={style.header}>
        <img alt='' className={style.img} src={logo}/>
        <div className={style.lohinBlock}>
          {props.isAuth ? props.login : <NavLink to={'/login'}>Login</NavLink>}
        </div>
      </header>
    </div>
    </div>
  );
}

export default Header;
