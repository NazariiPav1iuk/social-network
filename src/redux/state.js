import {rerenderEntireTree} from '../render'


let state = {
    profilePage:{
        posts: [
            {id: 1, message: 'Hi, how are you?', likeCount: 2},
            {id: 2, message: 'Its my first post', likeCount: 40},
            {id: 3, message: 'Did you remember me?', likeCount: 15},
            {id: 4, message: 'Did you?', likeCount: 5}
        ],
        newPostText:'write your post'
    },
    dialogsPage: {
        dialogs: [
            {id: 1, user: 'Andrey'},
            {id: 2, user: 'Petro'},
            {id: 3, user: 'Stepa'},
            {id: 4, user: 'Serhii'},
            {id: 5, user: 'Tanya'},
            {id: 6, user: 'Mycola'}
        ],
        messages: [
            {id: 1, message: 'Hi'},
            {id: 2, message: 'How are you?'},
            {id: 3, message: 'Im fine and you?'},
        ],
        newMessageText: 'write your message'
    },
    sidebar: {
        friendList: [
            {id: 1, user: 'Eva', icon: 'https://cdn.iconscout.com/icon/free/png-512/avatar-373-456325.png' },
            {id: 2, user: 'Nazari', icon: 'https://html5css.ru/w3css/img_avatar3.png'},
            {id: 3, user: 'Tanya' , icon: 'https://html5css.ru/w3images/avatar6.png'}
        ]
    }
}

export let addPost = () => {
    let newPost = { 
        id: 5,
        message: state.profilePage.newPostText,
        likeCount: 0
    };

    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEntireTree(state);
}


export let updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
}

export let updateNewMessageText = (newText) => {
    state.dialogsPage.newMessageText = newText;
    rerenderEntireTree(state);
}

export let sendMessage = () => {
    let newMessage = {
        id: 5,
        message: state.dialogsPage.newMessageText
    };

    state.dialogsPage.messages.push(newMessage);
    state.dialogsPage.newMessageText = '';
    rerenderEntireTree(state);
}



export default state;