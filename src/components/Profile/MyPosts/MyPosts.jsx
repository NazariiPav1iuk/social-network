import React from 'react'
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {

    let postsElements = props.posts.map( p =>  <Post message={p.message} likeCount={p.likeCount} id={p.id} />);

    let newPostElement = React.createRef();

    let addPost = () => {
        let text = newPostElement.current.value;
        props.addPost(text);
        newPostElement.current.value = '';
    }

    return (
        <div>
            My posts
            <div>
                New posts
            </div>
            <div>
                <textarea ref={ newPostElement } cols="30" rows="10"></textarea>
            </div>
            <button onClick={ addPost }>add post</button>
            <div className={s.posts}>
                { postsElements }
            </div> 
        </div>
    )
}

export default MyPosts;