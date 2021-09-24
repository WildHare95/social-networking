import {connect} from "react-redux";
import {
    setCurrentPageAC, toggleFollowingProgressAC, getUsers, doFollow, doUnfollow
} from "../../React/users-reducer";
import UsersAPIComponent from "./UsersAPIComponent";
import {compose} from "redux";
import {withAuthRedirect} from "../hoc/withAuthRedirect";


let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress,
    }
}


/*let mapDispatchToProps = (dispatch) => {
    return{
        follow: (userId) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId) =>{
            dispatch(unfollowAC(userId))
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users))
        },
        setCurrentPage: (pageNumber) => {
            dispatch(setCurrentPageAC(pageNumber))
        },
        setUsersTotalCount: (totalCount) => {
            dispatch(setUsersTotalCountAC(totalCount))
        },
        setIsFetching: (isFetching) =>{
            dispatch(setIsFetchingAC(isFetching))
        }
    }
}*/

export default compose (
    connect(mapStateToProps, {
    getUsers,
    doFollow,
    doUnfollow,
    setCurrentPage: setCurrentPageAC,
    toggleFollowingProgress: toggleFollowingProgressAC
}),withAuthRedirect)(UsersAPIComponent)

