import React from 'react';
import style from './Header.module.css';
import logo from './../../assets/imeges/SVR.png'
const Header = (props) => {
  return (
    <div >
    <div className={style.appWrapper}>
      <header className={style.header}>
        <img alt='' className={style.img} src={logo}/>
      </header>
    </div>
    </div>
  );
}

export default Header;
