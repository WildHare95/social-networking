import {ProfileAPI, UserAPI} from "../Components/api/api";

const ADD_POST = 'ADD-POST'
const SET_USER_PROFILE = 'SET-USER-PROFILE'
const SET_USER_STATUS = 'SET_USER_STATUS'

let initialState = {
    postData: [
    {id: 1, message: 'This post have sens', likesCount: '12'},
    {id: 2, message: 'This post haven\'t sens', likesCount: '42'},
    {id: 3, message: 'POST TEST', likesCount: '100'}
],
    profile: null,
    status: ""
}

const profileReducer = (state = initialState, action) =>{
    switch (action.type) {
        case ADD_POST: {
            let newPost = {id: 4, message: action.newPostText, likesCount: '33'}
            return {
                ...state,
                postData: [...state.postData, newPost],

            }
        }
        case SET_USER_PROFILE:{
            return {...state, profile: action.profile}
        }
        case  SET_USER_STATUS:{
            return {...state, status: action.status}
        }

        default:
            return state
    }
}


export const addPostActionCreator = (newPostText) => {
    return{
        type: ADD_POST, newPostText
    }
}
export const setUserStatusAC = (status) => {
    return{
        type: SET_USER_STATUS, status
    }
}

export const setUserProfileAC = (profile) => {
    return{
        type: SET_USER_PROFILE, profile
    }
}

export const getUserProfile = (userId) => (dispatch) => {
    return(
       UserAPI.getProfile(userId)
            .then(response => {
                dispatch(setUserProfileAC(response.data))
            })
    )
}

export const getUserStatus = (userId) => (dispatch) => {
    return(
        ProfileAPI.getStatus(userId)
            .then(response => {
                dispatch(setUserStatusAC(response.data))
            })
    )
}
export const updateUserStatus = (status) => (dispatch) => {
    return(
        ProfileAPI.updateStatus(status)
            .then(response => {
                if (response.data.resultCode === 0 ) {
                    dispatch(setUserStatusAC(status))
                }
            })
    )
}

export default profileReducer