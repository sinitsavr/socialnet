import React from "react";
import styles from "./users.module.css";
import pic from "./../../assets/imeges/pic.png";
import { NavLink } from "react-router-dom";

const Users = (props)=> {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i=1; i<=pagesCount; i++){pages.push(i)}
    return (
      <div>
        <div>
          {pages.map(p=>{
          return <span key={p} className={props.currentPage ===  p ? styles.active : undefined} onClick={(e)=>(props.onPageChanged(p))}>{p}</span> })} 
      </div>
      <div className={styles.users}>
        {props.users.map(u => (
          <div key={u.id}>
            <span>
              <div>
                <NavLink to={`/profile/${u.id}`}>
                <img src={u.photos.small !=null ? u.photos.small : pic} alt='' className={styles.usersPhoto} />
                </NavLink>
                <div>{u.name}</div>
              </div>
              <div>
                {u.followed ? (
                  <button disabled={props.followingInProgress.some(id=>id === u.id)}
                    onClick={()=>{props.unfollow(u.id)}}>Unfollow</button>
                ) : (
                  <button disabled={props.followingInProgress.some(id=>id === u.id)}
                    onClick={()=>{props.follow(u.id)}}>Follow</button>
                )}
              </div>
            </span>
            <span>
              <span>
                <div>{u.name}</div>
                <div>{u.status}</div>
              </span>
              <span>
                <div>{u.uniqueUrlName}</div>
                <div>{"u.location.city"}</div>
              </span>
            </span>
          </div>
        ))}
      </div>
      </div>
    );
  }

export default Users;
