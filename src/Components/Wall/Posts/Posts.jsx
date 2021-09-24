import p from './Posts.module.css'

const Posts = (props) => {
    return(
         <div className={p.conteiner}>
             <img src="https://i.pinimg.com/originals/0c/a9/e2/0ca9e28dcb12dc698cfd2beda6d6fa64.jpg" />
         {props.postmessage}
         
         <span className='like'> Likes {props.likesCount}</span>


         </div>
    )
}



export default Posts;