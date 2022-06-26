import React from "react";
import s from "./Users.module.css";
import usersPhoto from "../../assets/images/user-png.png";
import {NavLink} from "react-router-dom";
import Paginator from "../common/Paginator/Paginator";

const Users = (props) => {

    // let pagesCount = Math.ceil(props.totalUserCount / props.pageSize);
    //
    // let pages = [];
    // for (let i = 1; i <= pagesCount; i++) {
    //     if (pages.length < 20) {
    //         pages.push(i);
    //     }
    // }

    return (
        <div>
            <Paginator
                currentPage={props.currentPage} onPageChanged={props.onPageChanged}
                totalItemsCount={props.totalUserCount} pageSize={props.pageSize} />
            {/*<dic>*/}
            {/*    {pages.map(p => {*/}
            {/*        return <span*/}
            {/*            className={props.currentPage === p && s.selectedPage}*/}
            {/*            onClick={(e) => {*/}
            {/*                props.onPageChanged(p)*/}
            {/*            }}*/}
            {/*        >{p}</span>*/}
            {/*    })}*/}
            {/*</dic>*/}
            {
                props.users.map(u => <div key={u.id}>
        <span>
          <div>
              <NavLink to={'/profile/' + u.id}>
            <img src={u.photos.small != null ? u.photos.small : usersPhoto} className={s.userPhoto}/>
                  </NavLink>
          </div>
          <div>
            {u.followed
                ? <button
                    disabled={props.followingInProgress.some(id => id === u.id)}
                    onClick={() => {props.unfollow(u.id)}}
                >Unfollow</button>
                : <button
                    disabled={props.followingInProgress.some(id => id === u.id)}
                    onClick={() => {props.follow(u.id)}}
                >Follow</button>}
          </div>
        </span>
                    <span>
          <span>
            <div>{u.name}</div>
            <div>{u.status}</div>
          </span>
          <span>
            <div>{"u.location.country"}</div>
            <div>{"u.location.city"}</div>
          </span>
        </span>
                </div>)
            }
        </div>
    )

}

export default Users;