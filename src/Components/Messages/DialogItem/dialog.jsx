import s from './../masseges.module.css'
import {NavLink} from "react-router-dom";
import React from "react";



const Contacts = (props) => {
    return (
        <div className={s.dialogs}>
            <NavLink to={'/Components/MessageItem/messages/' + props.id}>{props.name}</NavLink>
        </div>
    )
}

export default Contacts;
