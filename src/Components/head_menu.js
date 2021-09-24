import './head_menu.css';
import s from "./header.module.css";
import {NavLink, Redirect} from "react-router-dom";
import React from "react";


const HeadMenu = (props) => {
  return (
       <div className='head_menu'>Settings

         <div className={s.loginBlock}>
             {props.isAuth
                 ? <div>{props.login} <button onClick={props.logout}>logout</button></div>
                 : <NavLink to={'/Components/login'}>Login</NavLink>
             }
         </div>

       </div>

  );
}

export default HeadMenu;