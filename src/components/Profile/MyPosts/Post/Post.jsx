import { replaceStringTransformer } from 'common-tags'
import React from 'react'
import s from './Post.module.css'


const Post = (props) => {
    return(
        <div className={s.post}>
            <img className={s.avatar} src='https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png' />
            <div className={s.content}>
                <p className={s.text}>{props.message}</p>
                <div className={s.like}> 
                    <span>{props.likeCount}</span>
                    <img className={s.likeImg} src='https://toppng.com/uploads/preview/like-heart-11551048696fib6y57o3r.png' />
                </div>
            </div>   
        </div>
    )
}

export default Post;