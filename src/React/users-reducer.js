import {UserAPI} from "../Components/api/api";

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET-USERS'
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE'
const SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USERS-COUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING'
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS'

let initialState = {
    users: [],
    pageSize: 5,
    currentUsers: 1,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: []

}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u
                })
            }

        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u
                })
            }
        case SET_USERS:
            return {...state, users: action.users}

        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.currentPage}
        case SET_TOTAL_USERS_COUNT:
            return {...state, totalUsersCount: action.count}
        case TOGGLE_IS_FETCHING:
            return {...state, isFetching: action.isFetching}
        case TOGGLE_IS_FOLLOWING_PROGRESS:
            return {
                ...state, followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)
            }


        default:
            return state
    }

}

export const followAC = (userId) => ({type: FOLLOW, userId})
export const unfollowAC = (userId) => ({type: UNFOLLOW, userId})
export const setUsersAC = (users) => ({type: SET_USERS, users})
export const setCurrentPageAC = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage})
export const setUsersTotalCountAC = (totalUsersCount) => ({type: SET_TOTAL_USERS_COUNT, count: totalUsersCount})
export const setIsFetchingAC = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching})
export const toggleFollowingProgressAC = (isFetching, userId) => ({type: TOGGLE_IS_FETCHING, isFetching, userId})

export const getUsers = (currentPage,pageSize) => {
    return (dispatch) => {
        dispatch(setIsFetchingAC(true))
        UserAPI.getUsers(currentPage,pageSize).then(data => {
            dispatch(setIsFetchingAC(false))
            dispatch(setUsersAC(data.items))
            dispatch(setUsersTotalCountAC(data.totalCount > 20 ? 35 : 20))
        })
    }
}

export const doFollow = (userId) => (dispatch) => {
    dispatch(toggleFollowingProgressAC(true,userId))
    UserAPI.followUser(userId)
        .then(response => {
            if (response.data.resultCode === 0)
            {
                dispatch(followAC(userId))
            }
            dispatch(toggleFollowingProgressAC(false, userId))
        })
}

export const doUnfollow = (userId) => {
    return (dispatch)  => {
        dispatch(toggleFollowingProgressAC(true,userId))
        UserAPI.unfollowUser(userId)
            .then(response => {
                if (response.data.resultCode === 0)
                {
                    dispatch(unfollowAC(userId))
                }
                dispatch(toggleFollowingProgressAC(false, userId))
            })
    }

}


export default usersReducer