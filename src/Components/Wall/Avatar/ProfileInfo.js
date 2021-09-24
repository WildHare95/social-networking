import React from "react";
import Preloader from "../../common/Preloader";
import ProfileStatus from "./ProfileStatus";

const ProfileInfo = (props) => {
    if (!props.profile){
        return <Preloader/>
    }

    return (
        <div>
            <span>
                <img src={props.profile.photos.large} alt=""/>
            </span>
            <span>
                {props.profile.fullName}
            </span>
            <div>
                <ProfileStatus status={props.status} updateUserStatus={props.updateUserStatus}/>
                Status:
                {props.profile.lookingForAJobDescription}
            </div>
        </div>
    )
}

export default ProfileInfo