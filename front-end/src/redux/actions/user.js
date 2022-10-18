import {
    LOGIN_FAIL,
    LOGIN_PENDING, LOGIN_SUCCESS,
    REGISTER_FAIL, REGISTER_PENDING, REGISTER_SUCCESS
} from "./types";
import axios from "axios";

const apiUrl = `${process.env.REACT_APP_API_ORIGIN}/api`

export const register = (name, username, password) => {
    return async (dispatch) => {
        try {
            dispatch({type: REGISTER_PENDING})
            await axios.post(`${apiUrl}/users`, {name: name, username: username, password: password})
            dispatch({type: REGISTER_SUCCESS})
        } catch (e) {
            dispatch({type: REGISTER_FAIL, payload: e.message})
        }
    }
}

export const login = (username, password) => {
    return async (dispatch) => {
        try {
            dispatch({type: LOGIN_PENDING})
            const response = await axios.post(`${apiUrl}/session`, {username: username, password: password})
            localStorage.setItem('x-auth-token', response.data.item)
            dispatch({type: LOGIN_SUCCESS})

            return {success: true}
        } catch (e) {
            dispatch({type: LOGIN_FAIL, payload: e.message})
            return {success: false}
        }
    }
}



