import '../Wall/wall.css';
import React from 'react'
import UserProfileContainer from "./Avatar/UserProfileContainer";



class ProfileContainer extends React.Component {
    render() {
        return (
            <div className='wall'>
                <UserProfileContainer/>


                <div>disc</div>
            </div>
        )
    }
}

export default ProfileContainer