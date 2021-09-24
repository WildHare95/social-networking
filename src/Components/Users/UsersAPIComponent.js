import React from "react";
import Users from "./Users";
import Preloader from "../common/Preloader";


class UsersAPIComponent extends React.Component {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }


    onPageChanged = (pageNumber) => {
        this.props.getUsers(pageNumber, this.props.pageSize)
    }


    render() {
        return (
            <>
                {this.props.isFetching ? <Preloader/> : null}

                <Users
                    totalUsersCount={this.props.totalUsersCount}
                    pageSize={this.props.pageSize}
                    onPageChanged={this.onPageChanged}
                    currentPage={this.props.currentPage}
                    users={this.props.users}
                    unfollow={this.props.doUnfollow}
                    follow={this.props.doFollow}
                    followingInProgress={this.props.followingInProgress}
                />
            </>

        )
    }

}




export default UsersAPIComponent