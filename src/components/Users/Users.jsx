import React from "react";
import Pagination from "../common/Paginator/Pagination";
import User from "./User";

const Users = ({
  currentPage,
  onPageChanged,
  totalUsersCount,
  pageSize,
  ...props
}) => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }
  return (
    <div>
      <Pagination
        onPageChanged={onPageChanged}
        totalItemsCount={totalUsersCount}
        currentPage={currentPage}
        pageSize={pageSize}
      />
      {props.users.map((u) => (
        <User
          key={u.id}
          user={u}
          followingInProgress={props.followingInProgress}
          follow={props.follow}
          unfollow={props.unfollow}
        />
      ))}
    </div>
  );
};

export default Users;
