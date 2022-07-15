const UPDATE_NEW_MESSAGE_BODY = "UPDATE_NEW_MESSAGE_BODY"
const SEND_MESSAGE = "SEND_MESSAGE"

type DialogType = {
    id: number
    name: string
}

type MessageType = {
    id: number
    message: string
}

let initialState = {
    dialogsData: [
        {id: 1, name: 'Dima'},
        {id: 2, name: 'Oleg'},
        {id: 3, name: 'Sasha'},
        {id: 4, name: 'Pasha'},
        {id: 5, name: 'Vova'},
    ] as Array<DialogType>,
    messages: [
        {id: 1, message: 'how are uu'},
        {id: 2, message: 'hi hi'},
        {id: 3, message: 'yo yo'},
        {id: 4, message: 'yo yo yo'},
        {id: 5, message: 'yo yo 213'},
    ] as Array<MessageType>,
    newMessageBody: ""
}

export type InitialStateType = typeof initialState;

const dialogsReducer = (state = initialState, action: any): InitialStateType => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY: {
            return {
                ...state,
                newMessageBody: action.body
            }
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

type SendMessageCreatorActionType = {
    type: typeof SEND_MESSAGE
}
export const sendMessageCreator = ():SendMessageCreatorActionType => ({type: SEND_MESSAGE})

type UpdateNewMessageBodyCreatorActionType = {
    type: typeof UPDATE_NEW_MESSAGE_BODY
    body: string
}

export const updateNewMessageBodyCreator = (body: string):UpdateNewMessageBodyCreatorActionType =>
    ({type: UPDATE_NEW_MESSAGE_BODY, body: body})
export default dialogsReducer;