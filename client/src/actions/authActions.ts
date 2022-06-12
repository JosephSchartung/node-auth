import axios from "axios";
import jwtDecode from "jwt-decode";
import { NavigateFunction } from "react-router-dom";

import setAuthToken from "../utils/setAuthToken";

import {
    GET_ERRORS,
    SET_CURRENT_USER,
    USER_LOADING
} from './types';

export const registerUser: RegisterUser = (userData: IRegisterUser, history:NavigateFunction) => (dispatch:any) => {
    axios
        .post("/api/users/register", userData)
        .then(res => history("/login"))
        .catch(err => 
            dispatch({
                type:GET_ERRORS,
                payload: err.response.data
            })
        );
};

export const loginUser = (userData:ILoginUser) => (dispatch:any) => {
    axios
        .post("/api/users/login", userData)
        .then(res => {
            const { token } = res.data;
            localStorage.setItem("jwtToken", token);
            setAuthToken(token);
            const decoded = jwtDecode<IJwtToken>(token);
            dispatch(setCurrentUser(decoded));
        })
        .catch(err =>
            dispatch({
                type:GET_ERRORS,
                payload: err.response.data
            }) 
        );
};

export const setCurrentUser = (decoded:IJwtToken|object) => {
    return {
        type: SET_CURRENT_USER,
        payload: decoded
    }
}

export const setUserLoading = () => {
    return {
        type:USER_LOADING
    }
};

export const logoutUser: LogoutUser = () => (dispatch:any) => {
    localStorage.removeItem("jwtToken");
    setAuthToken(false);
    dispatch(setCurrentUser({}));
}