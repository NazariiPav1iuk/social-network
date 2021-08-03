const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likeCount: 2},
        {id: 2, message: 'Its my first post', likeCount: 40},
        {id: 3, message: 'Did you remember me?', likeCount: 15},
        {id: 4, message: 'Did you?', likeCount: 5}
    ],
    newPostText:'write your post'
}

const profileReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_POST:{
            return {
                ...state,
                posts: [...state.posts, {id: 4, message: state.newPostText, likeCount: 0}],
                newPostText: ''
            };
        }
        case UPDATE_NEW_POST_TEXT:{
            return {
                ...state,
                newPostText:  action.newText
            };            
        }
         
        default:
            return state;    
    }


}

export const addPostCreator = () =>  ({type: ADD_POST});
export const uppdateNewPostTextCreator = (text) => ({ type: UPDATE_NEW_POST_TEXT, newText: text});

export default profileReducer;