import React from "react";
import styles from "./users.module.css";
import pic from "./../../assets/imeges/pic.png";

const Users = (props)=> {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i=1; i<=pagesCount; i++){pages.push(i)}
    return (
      <div>
        <div>
          {pages.map(p=>{
          return <span className={props.currentPage ===  p && styles.selectedPage} onClick={(e)=>(props.onPageChanged(p))}>{p}</span> })} 
      </div>
      <div className={styles.users}>
        {props.users.map((u) => (
          <div key={u.id}>
            <span>
              <div>
                <img src={pic} alt="" className={styles.usersPhoto} />
              </div>
              <div>
                {u.followed ? (
                  <button
                    onClick={() => {
                      props.unfollow(u.id);
                    }}
                  >
                    Unfollow
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      props.follow(u.id);
                    }}
                  >
                    Follow
                  </button>
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
