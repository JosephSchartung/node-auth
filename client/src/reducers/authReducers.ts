import {
    SET_CURRENT_USER,
    USER_LOADING
} from "../actions/types";

import isEmpty from 'is-empty';

const initialState: IAuth = {
    isAuthenticated: false,
    user: {
        name:"",
        username:"",
    },
    loading: false
};

export default (state=initialState, action:any) => {
    switch(action.type) {
        case SET_CURRENT_USER:
            return {
                ...state,
                isAuthenticated: !isEmpty(action.payload),
                user:action.payload,
            };
        case USER_LOADING:
            return {
                ...state,
                loading:true,
            };
        default:
            return state;
    }
}