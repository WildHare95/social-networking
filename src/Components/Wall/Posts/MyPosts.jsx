import p from './Posts.module.css'
import Posts from "./Posts";
import React from "react"
import {Redirect} from "react-router-dom";
import {Field, reduxForm} from "redux-form";


const MyPosts = (props) => {

    let onAddPost = (value) => {
        props.addPost(value.newPostText)
    }

    let postsElement = props.posts.map(p => <Posts postmessage={p.message} id={p.id} likesCount={p.likesCount}/>)

    return(
         <div>
             <AddReduxPostForm onSubmit={onAddPost}/>
            {postsElement}
         </div>
    )
}

const addPostForm = (props) =>{
    return(
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={"textarea"} name={"newPostText"} placeholder={"Enter your post"}/>
            </div>
            <div>
                <button>Send Post</button>
            </div>
        </form>
    )
}

const AddReduxPostForm = reduxForm({form: "addPostForm"})(addPostForm)



export default MyPosts;