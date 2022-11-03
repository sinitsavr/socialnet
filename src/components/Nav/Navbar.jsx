import React from 'react';
import style from'./Navbar.module.css';
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (<div className={style.appWrapper}>
    <nav className={style.nav}>
        <div className='item'>
          <NavLink to='/profile'>Profile</NavLink>
        </div>
        <div className={style.item}>
          <NavLink to='/dialogs'>Messages</NavLink>
        </div>
        <div className={style.item}>
          <NavLink to='/users'>Users</NavLink>
        </div>
        <div className={style.item}>
          <NavLink to='/News'>News</NavLink>
        </div>
        <div className={style.item}>
          <NavLink to='/Music'>Music</NavLink>
        </div>
        <div className={style.item}>
          <NavLink to='/Settings'>Settings</NavLink>
        </div>
      </nav></div>
  );
}

export default Navbar;
