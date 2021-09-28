import './App.css';
import Header from './Components/header';
import Menu from './Components/Menu/menu';
import {Route} from 'react-router-dom'
import News from "./Components/News/news";
import Music from './Components/Music/music'
import MessagesContainer from "./Components/Messages/messagesContainer";
import UsersContainer from "./Components/Users/UsersContainer";
import ProfileContainer from "./Components/Wall/ProfileContainer";
import HeadMenuContainer from "./Components/head_menuContainer";
import Login from "./Components/Login/Login";
import {connect} from "react-redux";
import React from "react";
import {withRouter} from "react-router";
import {compose} from "redux";
import {initializedApp} from "./redux/App-reducer";
import Preloader from "./Components/common/Preloader";

class App extends React.Component {
    componentDidMount() {
        this.props.initializedApp()
    }
    render() {
       if (this.props.initialized)
       {
           return <Preloader />
       }
        return (
            <div className='app_solution'>
                <Header/>
                <HeadMenuContainer/>
                <Menu/>
                <Route path={'/messages'}
                       render={() => <MessagesContainer/>}/>
                <Route path={'/profile/:userId?'} render={() => <ProfileContainer/>}/>
                <Route path={'/Components/News/news'} component={News}/>
                <Route path={'/Components/Music/music'} component={Music}/>
                <Route path={'/users'} render={() => <UsersContainer/>}/>
                <Route path={'/login'} render={() => <Login/>}/>
            </div>
        );
    }
}


let mapSateToProps = (state) => ({
    initialized: state.app.initialized
})

export default  compose(withRouter,connect(mapSateToProps, {initializedApp}))(App);