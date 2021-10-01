import React from "react";
import MyPostsContainer from "../Posts/MyPostsContainer";
import ProfileInfo from "./ProfileInfo";

let Profile = (props) =>{
    return(
        <div>
            <ProfileInfo savePhoto={props.savePhoto} isOwner = {props.isOwner} profile={props.profile} isAuth={props.isAuth} status={props.status} updateUserStatus={props.updateUserStatus}/>
            <MyPostsContainer/>
        </div>
    )
}

export default Profile