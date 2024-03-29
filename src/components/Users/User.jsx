import React from "react";
import styles from "./users.module.css";
import pic from "./../../assets/imeges/pic.png";
import { NavLink } from "react-router-dom";

const User = ({user, followingInProgress, unfollow, follow})=> {
 
    return(
          <div>
            <span>
              <div>
                <NavLink to={'/profile/' + user.id}>
                <img src={user.photos.small !== null ? user.photos.small : pic} alt='' className={styles.usersPhoto} />
                </NavLink>
              </div>
              <div>
                {user.followed ? (
                  <button disabled={followingInProgress.some(id=>id === user.id)}
                    onClick={()=>{unfollow(user.id)}}>Unfollow</button>
                ) : (
                  <button disabled={followingInProgress.some(id=>id === user.id)}
                    onClick={()=>{follow(user.id)}}>Follow</button>
                )}
              </div>
            </span>
            <span>
              <span>
                <div>{user.name}</div>
                <div>{user.status}</div>
              </span>
              <span>
                <div>{user.uniqueUrlName}</div>
                <div>{"user.location.city"}</div>
              </span>
            </span>
          </div>
        )
  };

export default User;
