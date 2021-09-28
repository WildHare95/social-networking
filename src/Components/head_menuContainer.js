import React from "react";
import HeadMenu from "./head_menu";
import {connect} from "react-redux";
import {getUserData, logout} from "../redux/auth-reducer";


class HeadMenuContainer extends React.Component {
    render() {
        return <HeadMenu {...this.props}/>
    }
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
})

export default connect(mapStateToProps, {logout})(HeadMenuContainer);