import {getAuthUserData} from "./auth-reducer";

const SET_INITIALIZED = 'SET_INITIALIZED';

export type InitialStateType = {
    initialized: boolean
}

let initialState: InitialStateType = {
    initialized: false
}

 const appReducer = (state= initialState, action: any): InitialStateType => {
    switch (action.type){
        case SET_INITIALIZED:{
            return{
                ...state,
                initialized: true
            }
        }
        default:{
            return state;
        }
    }
}

type InitializedSuccessActionType = {
    type: typeof SET_INITIALIZED
}

export const initializedSuccess = ():InitializedSuccessActionType => ({type: SET_INITIALIZED});

export const initializeApp = () => (dispatch: any) => {
    const promise = dispatch(getAuthUserData());
    Promise.all([promise]).then(() => {
        dispatch(initializedSuccess());
    })
}

export default appReducer;
