const UPDATE_NEW_MESSAGE_BODY = "UPDATE_NEW_MESSAGE_BODY"
const SEND_MESSAGE = "SEND_MESSAGE"

let initialState = {
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

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY: {
            return {
                ...state,
                newMessageBody: action.body
            };;
        }

        case SEND_MESSAGE: {
            let body = state.newMessageBody;
            return  {
                ...state,
                newMessageBody: "",
                messages: [...state.messages, {id: 6, message: body}]
            };
        }

        default:
            return state;
    }

}
export const sendMessageCreator = () => ({type: SEND_MESSAGE})

export const updateNewMessageBodyCreator = (body) =>
    ({type: UPDATE_NEW_MESSAGE_BODY, body: body})
export default dialogsReducer;