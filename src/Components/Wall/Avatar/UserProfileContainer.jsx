import React from "react";
import {connect} from "react-redux";
import {getUserProfile, getUserStatus, updateUserStatus} from "../../../redux/profile-reducer";
import Profile from "./Profile";
import {withRouter} from "react-router";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";



class UserProfileContainer extends React.Component{
    componentDidMount() {
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

    render() {

        return(

            <Profile {...this.props} profile={this.props.profile} status={this.props.status} updateUserStatus={this.props.updateUserStatus}/>

        )
    }
}
let mapStateToProps  = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    user: state.auth.userId
})





export default compose (connect(mapStateToProps, {getUserProfile,getUserStatus, updateUserStatus}),withRouter,withAuthRedirect)(UserProfileContainer)