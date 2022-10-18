import {
    LOGIN_FAIL,
    LOGIN_PENDING,
    LOGIN_SUCCESS,
    REGISTER_FAIL,
    REGISTER_PENDING,
    REGISTER_SUCCESS
} from "../actions/types";

const initialState = {
    loading: false,
    successful: false,
    error: ''
}


const userReducer = (state = initialState, action) => {
    const {type, payload} = action;
    switch (type) {
        case REGISTER_PENDING:
            return {
                ...state,
                error: '',
                loading: true,
                successful: false
            };
        case REGISTER_SUCCESS:
            return {
                ...state,
                error: '',
                successful: true,
                loading: false
            };
        case REGISTER_FAIL:
            return {
                ...state,
                error: payload,
                loading: false,
                successful: false
            };
        case LOGIN_PENDING:
            return {
                ...state,
                error: '',
                loading: true,
                successful: false
            };
        case LOGIN_SUCCESS:
            return {
                ...state,
                error: '',
                successful: true,
                loading: false
            };
        case LOGIN_FAIL:
            return {
                ...state,
                error: payload,
                loading: false,
                successful: false
            };

        default:
            return state
    }
}

export default userReducer