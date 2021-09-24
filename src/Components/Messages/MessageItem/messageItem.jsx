import s from './../masseges.module.css'
import p from '../Chat/Chat.module.css'
import React from "react";


const SMSItems = (props) =>{

    return(
        <div className={s.messages}>
            <div className={p.container}>{props.message}</div>
            {props.messageSc}
        </div>
    )
}


export default SMSItems;
