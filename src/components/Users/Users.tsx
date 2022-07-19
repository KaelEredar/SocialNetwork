import React from "react";
import s from "./Users.module.css";
import usersPhoto from "../../assets/images/user-png.png";
import {NavLink} from "react-router-dom";
import Paginator from "../common/Paginator/Paginator";
import {UserType} from "../../types/types";

type PropsType = {
    currentPage: number
    follow: (userId: number) => void
    followingInProgress: Array<number>
    onPageChanged: (pageNumber: number) => void
    pageSize: number
    totalUserCount: number
    unfollow: (userId: number) => void
    users: Array<UserType>
}

const Users: React.FC<PropsType> = ({
                                        currentPage,
                                        follow,
                                        followingInProgress,
                                        onPageChanged,
                                        pageSize,
                                        totalUserCount,
                                        unfollow,
                                        users
                                    }) => {


    return (
        <div>
            <Paginator
                currentPage={currentPage} onPageChanged={onPageChanged}
                totalItemsCount={totalUserCount} pageSize={pageSize}/>
            {
                users.map(u => <div key={u.id}>
        <span>
          <div>
              <NavLink to={'/profile/' + u.id}>
            <img alt={'UserPhoto'} src={u.photos.small != null ? u.photos.small : usersPhoto} className={s.userPhoto}/>
                  </NavLink>
          </div>
          <div>
            {u.followed
                ? <button
                    disabled={followingInProgress.some(id => id === u.id)}
                    onClick={() => {
                        unfollow(u.id)
                    }}
                >Unfollow</button>
                : <button
                    disabled={followingInProgress.some(id => id === u.id)}
                    onClick={() => {
                        follow(u.id)
                    }}
                >Follow</button>}
          </div>
        </span>
                    <span>
          <span>
            <div>{u.name}</div>
            <div>{u.status}</div>
          </span>
        </span>
                </div>)
            }
        </div>
    )

}

export default Users;