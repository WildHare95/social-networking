import React from "react";
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus";
import photo from "./../../../assets/imeges/user.png"
import style from "./Avatar.module.css"

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }
    const onMainPhotoSelected = (e) => {
        if(e.target.files.length){
            props.savePhoto(e.target.files[0])
        }
    }


    return (
        <div className={style.profile}>
            <div className={style.profile}>
                {!props.profile.photos.large ? <img className={style.img} src={photo}/> :
                    <img src={props.profile.photos.large} alt=""/>}
                {props.isOwner && <label className={style.label}>Selected Photo
                    <input className={style.my} type="file" onChange={onMainPhotoSelected}/>
                </label>
                }
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