import React from 'react'
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {

    let postsElements = props.posts.map( p =>  <Post message={p.message} likeCount={p.likeCount} id={p.id} />);

    let newPostElement = React.createRef();

    let addPost = () => {
        props.addPost();
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    }

    return (
        <div className={s.content}>
            <h2 className={s.tittle}>My posts</h2>
            <div className={s.addForm}>
                <textarea className={s.field} ref={ newPostElement } onChange={onPostChange} value={props.newPostText}  rows="3" />    
            </div>
            <button class={s.button} onClick={ addPost }>add post</button>
            <div className={s.posts}>
                { postsElements }
            </div> 
        </div>
    )
}

export default MyPosts;