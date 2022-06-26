import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi, how are u?', likesCount: 12},
                {id: 2, message: 'What re u doing?', likesCount: 212},
            ],
            newPostText: 'Samurai way'
        },
        dialogsPage: {
            dialogsData: [
                {id: 1, name: 'Dima'},
                {id: 2, name: 'Oleg'},
                {id: 3, name: 'Sasha'},
                {id: 4, name: 'Pasha'},
                {id: 5, name: 'Vova'},
            ],
            messages: [
                {id: 1, message: 'how are uu'},
                {id: 2, message: 'hi hi'},
                {id: 3, message: 'yo yo'},
                {id: 4, message: 'yo yo yo'},
                {id: 5, message: 'yo yo 213'},
            ],
            newMessageBody: ""
        }
    },
    _callSubscriber() {
        console.log("State changed")
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        this._state.profilePage = profileReducer({state: this._state.profilePage, action});
        this._state.dialogsPage = dialogsReducer({state: this._state.dialogsPage, action});
        this._callSubscriber(this._state);
    }
}

export default store;