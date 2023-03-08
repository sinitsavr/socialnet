import React from 'react';
import style from'./Navbar.module.css';
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className={style.nav}>
        <div >
          <NavLink className={navData => navData.isActive ? style.activeLink : style.item} to='/profile'>Profile</NavLink>
        </div>
        <div className={navData => navData.isActive ? style.activeLink : style.item}>
          <NavLink to='/dialogs'>Messages</NavLink>
        </div>
        <div className={navData => navData.isActive ? style.activeLink : style.item}>
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
      </nav>
  );
}

export default Navbar;
