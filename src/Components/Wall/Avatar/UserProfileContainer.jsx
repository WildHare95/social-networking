import React from "react";
import {connect} from "react-redux";
import {getUserProfile, getUserStatus, savePhoto, updateUserStatus} from "../../../redux/profile-reducer";
import Profile from "./Profile";
import {withRouter} from "react-router";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";



class UserProfileContainer extends React.Component{

    refreshProfile = () =>{
        let userId = this.props.match.params.userId
        if (!userId)
        {
            userId = this.props.user
            if (!userId)
            {
                this.props.history.push("/login")
            }
        }
        this.props.getUserProfile(userId)
        this.props.getUserStatus(userId)
    }

    componentDidMount() {
        this.refreshProfile()
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.match.params.userId !== prevProps.match.params.userId)
        {
            this.refreshProfile()
        }
    }

    render() {

        return(

            <Profile {...this.props}
                     isOwner = {!this.props.match.params.userId}
                     profile={this.props.profile}
                     status={this.props.status}
                     updateUserStatus={this.props.updateUserStatus}
                     savePhoto={this.props.savePhoto}/>

        )
    }
}
let mapStateToProps  = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    user: state.auth.userId
})





export default compose (connect(mapStateToProps, {getUserProfile,getUserStatus, updateUserStatus, savePhoto}),withRouter,withAuthRedirect)(UserProfileContainer)