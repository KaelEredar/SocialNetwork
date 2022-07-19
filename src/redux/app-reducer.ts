import {getAuthUserData} from "./auth-reducer";
import {ThunkAction} from "redux-thunk";
import {AppStateType} from "./redux-store";

const SET_INITIALIZED = 'SET_INITIALIZED';

export type InitialStateType = {
    initialized: boolean
}

let initialState: InitialStateType = {
    initialized: false
}

 const appReducer = (state= initialState, action: ActionsType): InitialStateType => {
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

type ActionsType = InitializedSuccessActionType;

type InitializedSuccessActionType = {
    type: typeof SET_INITIALIZED
}

export const initializedSuccess = ():InitializedSuccessActionType => ({type: SET_INITIALIZED});


export const initializeApp = (): ThunkAction<void, AppStateType, any, ActionsType> => (dispatch) => {
    const promise = dispatch(getAuthUserData());
    Promise.all([promise]).then(() => {
        dispatch(initializedSuccess());
    })
}

export default appReducer;
