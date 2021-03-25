import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_ERROR } from "../actions/login"

let initialState = {
    loading: false,
    data: null,
    error: null
}

const login = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_REQUEST:
            return {
                ...state,
                loading: true
            }

        case LOGIN_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.payload
            }
        case LOGIN_ERROR:
            return {
                ...state,
                loading: false,
                data: action.payload
            }

        default:
            return state;
    }
}

export default login