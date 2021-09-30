import React from "react";
import photoUser from '../../assets/imeges/user.png'
import styles from './users.module.css'
import {NavLink} from "react-router-dom";
import Paginator from "../common/Paginator/Paginator";


let Users = (props) => {
    return (
        <div className={styles.container}>
            {props.users.map(u => <div key={u.id}>
                <div className={styles.user}>
                    <div>
                        <NavLink to={'/profile/' + u.id}>
                            <img src={u.photos.small != null ? u.photos.small : photoUser}
                                 className={styles.userPhoto}/>
                        </NavLink>
                    </div>
                    <div>
                        {
                            u.followed ?
                                (
                                    <button className={styles.button}
                                            disabled={props.followingInProgress.some(id => id === u.id)}
                                            onClick={() => props.unfollow(u.id)}
                                    >
                                        Unfollow
                                    </button>
                                )
                                :
                                (
                                    <button className={styles.button2}
                                        disabled={props.followingInProgress.some(id => id === u.id)}
                                        onClick={() => props.follow(u.id)}
                                    >
                                        Follow
                                    </button>
                                )
                        }
                    </div>

                    <span>
                    <div>{u.name}</div>
                    <div>{u.status}</div>
                </span>
                    <span>
                    <div>{'u.location.country'}</div>
                    <div>{'u.location.city'}</div>
                </span>
                </div>
            </div>)}

            <Paginator currentPage={props.currentPage}
                       totalUsersCount={props.totalUsersCount}
                       pageSize={props.pageSize}
                       onPageChanged={props.onPageChanged}/>
        </div>
    )
}
export default Users

/*
<Paginator />

{u.followed
? <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
props.toggleFollowingProgress(true, u.id)
axios.delete(`http://social-network.samuraijs.com/api/1.0/follow/${u.id}`,{
withCredentials: true,
headers: {
"API-KEY": "7f1c6492-01e4-4780-8406-1b07cd4220c8"
}
})
.then(response => {
if (response.data.resultCode == 0)
{
props.follow(u.id)
}
props.toggleFollowingProgress(false, u.id)
})
}}>Unfollow</button>
: <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
props.toggleFollowingProgress(true, u.id)
axios.post(`http://social-network.samuraijs.com/api/1.0/follow/${u.id}`,{},{
withCredentials: true,
headers: {
"API-KEY": "7f1c6492-01e4-4780-8406-1b07cd4220c8"
}
})
.then(response => {
if (response.data.resultCode == 0)
{
props.follow(u.id)
}
props.toggleFollowingProgress(false, u.id)
})
props.follow(u.id)
}}>Follow</button>}*/
