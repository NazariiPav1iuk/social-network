import React from 'react'
import { addPostCreator, uppdateNewPostTextCreator } from '../../../redux/profileReducer';
import MyPosts from './MyPosts';
import { connect } from 'react-redux';


let mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}

let mapDispatchToProps = (dispatch) =>{
    return {
        addPost: () => {
            dispatch(addPostCreator());
        },
        uppdateNewPostText: (text) => {
            dispatch(uppdateNewPostTextCreator(text)); 
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;