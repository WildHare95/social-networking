import p from './Posts.module.css'
import photo from "./../../../assets/imeges/user.png"

const Posts = (props) => {
    return (
        <div className={p.conteiner}>
            <div><img src={photo}/></div>
            <div className={p.post}> {props.postmessage} </div>
            <div className={p.likes}> Likes {props.likesCount}</div>
        </div>
    )
}


export default Posts;