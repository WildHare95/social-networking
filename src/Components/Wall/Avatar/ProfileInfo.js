import React from "react";
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus";
import photo from "./../../../assets/imeges/user.png"
import style from "./Avatar.module.css"

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }

    return (
        <div className={style.profile}>
            <div className={style.profile}>
                {!props.profile.photos.large ? <img className={style.img} src={photo}/> :
                    <img src={props.profile.photos.large} alt=""/>}

            </div>
            <div>
            <span>
                {props.profile.fullName}
            </span>
                <div>
                    <ProfileStatus status={props.status} updateUserStatus={props.updateUserStatus}/>
                    {props.profile.lookingForAJobDescription}
                </div>
            </div>
        </div>
    )
}

export default ProfileInfo