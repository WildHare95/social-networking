import {applyMiddleware, combineReducers, createStore} from "redux"
import profileReducer from "./profile-reducer";
import dialogReducer from "./dialogs-reducer";
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";
import thunkMiddleware from "redux-thunk";
import {reducer as formReducer} from "redux-form";
import appReducer from "./App-reducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    usersPage: usersReducer,
    dialogPage: dialogReducer,
    auth: authReducer,
    form: formReducer,
    app: appReducer
})

let store = createStore(reducers, applyMiddleware(thunkMiddleware))

export default store