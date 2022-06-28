import axios from "axios";
import jwtDecode from "jwt-decode";
import { NextRouter } from "next/router";
import { Dispatch } from "redux";

import { setAuthToken } from "../../utils";


import {
    GET_ERRORS,
    SET_CURRENT_USER,
    USER_LOADING,
} from "./types";

export const registerUser = (userData: RegisterUserData, history:NextRouter) => (dispatch: any) => {
    axios
        .post("/api/users/register", userData)
        .then(res => history.push("/login"))
        .catch(err => 
            dispatch({
                type:GET_ERRORS,
                payload: err.response
            })
        );
}

export const loginUser = (userData: LoginUserData) => (dispatch:any) => {
    axios
        .post("/api/users/login", userData)
        .then(res => {
            const { token }  = res.data;
            localStorage.setItem("jwtToken", token);
            setAuthToken(token);
            const decoded = jwtDecode<JwtToken>(token);
            dispatch(setCurrentUser(decoded));
        })
        .catch(err => 
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })    
        )
};

export const setCurrentUser = (decoded: JwtToken | object) => {
    return {
        type: SET_CURRENT_USER,
        payload: decoded
    };
};

export const setUserLoading = () => {
    return {
        type: USER_LOADING
    }
};

export const logoutUser = () => (dispatch:Dispatch<any>) => {
    localStorage.removeItem("jwtToken");
    setAuthToken(false);
    dispatch(setCurrentUser({}));
}