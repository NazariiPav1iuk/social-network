import React from 'react'
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
    // Масив з інформацією який прийде з серевера
    let posts = [
        {id: 1, message: 'Hi, how are you?', likeCount: 2},
        {id: 2, message: 'Its my first post', likeCount: 40},
        {id: 3, message: 'Did you remember me?', likeCount: 15},
        {id: 4, message: 'Did you?', likeCount: 5}
    ];

    let postsElements = posts.map( p =>  <Post message={p.message} likeCount={p.likeCount} id={p.id} />);

    return (
        <div>
            My posts
            <div>
                New posts
            </div>
            <div className={s.posts}>
                { postsElements }
            </div> 
        </div>
    )
}

export default MyPosts;