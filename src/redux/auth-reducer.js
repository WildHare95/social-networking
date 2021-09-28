import {AuthAPI} from "../Components/api/api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = 'SET_USER_DATA'

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload,

            }
        default:
            return state
    }

}

export const setUserData = (userId, email, login, isAuth) => {
    return {
        type: SET_USER_DATA, payload: {userId, email, login, isAuth }
    }
}

export const getUserData = () => (dispatch) => {
    return(
        AuthAPI.me().then(response => {
            if (response.data.resultCode === 0)
            {

                let {id, login, email} = response.data.data
                dispatch(setUserData(id, email, login, true))

            }
        })
    )
}

export  const login = (email, password, rememberMe) => (dispatch) => {
    return(
        AuthAPI.login(email, password, rememberMe).then(response => {
            if (response.data.resultCode === 0)
            {
                dispatch(getUserData())
            }else
            {
                let message = response.data.message > 0 ? response.data.message[0] : "Some error"
                dispatch(stopSubmit("login", {_error: message} ))
            }


        })
    )
}
export  const logout = () => (dispatch) => {
    return(
        AuthAPI.logout().then(response => {
            if (response.data.resultCode === 0)
            {
                dispatch(setUserData(null, null, null, false))
            }
        })
    )
}
export default authReducer