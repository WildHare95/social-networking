import {NavLink, Redirect} from "react-router-dom";
import React from "react";
import style from  "./head_menu.module.css"


const HeadMenu = (props) => {
  return (
       <div className={style.head_menu}>
         <div className={style.text}>
             {props.isAuth
                 ? <div>{props.login} <button className={style.button} onClick={props.logout}>Logout</button></div>
                 : <NavLink to={'/Components/login'}>Login</NavLink>
             }
         </div>

       </div>

  );
}

export default HeadMenu;