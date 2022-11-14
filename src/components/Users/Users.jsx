import React from "react";
import styles from "./users.module.css";
import pic from "./../../assets/imeges/pic.png";
import { NavLink } from "react-router-dom";
import axios from 'axios'
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
                <NavLink to={'/profile/' +u.id}>
                <img src={u.photos.small !=null ? u.photos.small : pic} alt='' className={styles.usersPhoto} />
                </NavLink>
              </div>
              <div>
                {u.followed ? (
                  <button
                    onClick={() => { axios.delete(
                      `https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {withCredentials:true, headers: {"API-KEY": "93a8948b-9e2b-4763-af0c-36e8a944067a"}})
                    .then((response) => {
                      if(response.data.resultCode === 0){
              props.unfollow(u.id)}})}}>Unfollow</button>
                ) : (
                  <button
                    onClick={() => {
                      axios.post(
        `https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {withCredentials:true, headers: {"API-KEY": "93a8948b-9e2b-4763-af0c-36e8a944067a"}})
      .then((response) => {
        if(response.data.resultCode === 0){
props.follow(u.id)}});}}>Follow</button>
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
