import s from "./masseges.module.css";
import Contacts from "./DialogItem/dialog";
import {Redirect} from 'react-router-dom'
import SMSItems from "./MessageItem/messageItem";
import {Field, reduxForm} from "redux-form";
import React from "react";





const Messages = (props) => {
    let state = props.dialogPage

    let dialogElements = state.dialogData.map(d => <Contacts name={d.name} id={d.id}/>)

    let messageElements = state.messageData.map(m => <SMSItems message={m.mes} id={m.id}/>)
    // let second = props.second.map(m => <SMSItems messageSc={m.mes} id={m.id}/>)
    let addNewMessage = (value) => {
        props.sendMessage(value.newMessageBody)

    }

    return (
        <div className={s.container}>
            <div>
                {dialogElements}
            </div>
            <div>
                <div>{messageElements}</div>
                <div>
                    <AddMessageFormRedux onSubmit={addNewMessage}/>
                </div>
            </div>
        </div>
    )
}

const addMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={"textarea"} name={"newMessageBody"} placeholder={"Enter your message"}/>
            </div>
            <div>
                <button>Send</button>
            </div>
        </form>
    )
}

const AddMessageFormRedux = reduxForm({
        form: "dialogAddMessageForm"
    }
)(addMessageForm)


export default Messages;

