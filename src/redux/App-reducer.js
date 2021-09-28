import {AuthAPI} from "../Components/api/api";
import {stopSubmit} from "redux-form";
import {getUserData} from "./auth-reducer";

const SET_INITIALIZATION = 'SET_INITIALIZATION'

let initialState = {
    initialized: false
}

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_INITIALIZATION:
            return {
                ...state,
                initialization: true
            }
        default:
            return state
    }

}

export const initializationSuccess = () => {
    return {
        type: SET_INITIALIZATION
    }
}

export const initializedApp = () => (dispatch) => {

    let promise = dispatch(getUserData())
   Promise.all( [promise]).then(() => {
        dispatch(initializationSuccess())
    })


}

export default appReducer