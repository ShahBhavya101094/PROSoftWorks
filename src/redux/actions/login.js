import { SERVER_URL } from "../../api";
import axios from 'axios'
export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_ERROR = 'LOGIN_ERROR';
export const RESET_LOGIN = 'RESET_LOGIN';


export const login = (data) => {
    return dispatch => {
        dispatch({
            type: LOGIN_REQUEST
        })
        axios({
            method: 'POST',
            url: `${SERVER_URL}v1/login`,
            data: data
        }).then(function (response) {
            dispatch({
                type: LOGIN_SUCCESS,
                payload: response
            })
        })
            .catch(function (error) {
                dispatch({
                    type: LOGIN_ERROR,
                    payload: error.response
                })
            })

    }

}

export const resetLogin = () => {
    return dispatch => {
        dispatch({
            type: RESET_LOGIN
        })
    }

}