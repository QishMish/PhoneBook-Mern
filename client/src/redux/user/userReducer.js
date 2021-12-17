import {
    LOGIN_START,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    LOG_OUT
    } from './userTypes'

const initialState = {
    loading: false,
    user:JSON.parse(localStorage.getItem('user')) || null,
    error:false
}


const userReducer = (state = initialState, action) =>{
    switch (action.type) {
        case LOGIN_START:
            return {
              ...state,
              loading: true
            }
        case LOGIN_SUCCESS:
            localStorage.setItem('user', JSON.stringify(action.payload))
            return {
                error:false,
                user: action.payload,
                loading: false,
            }
        case LOGIN_FAILURE:
            return {
                user: null,
                loading: false,
                error: true,
            }
        case LOG_OUT:
            localStorage.removeItem('user')
            document.cookies.remove('jwt')
            return {
                user: null,
                loading: false,
                error: false,
            };
        default:
            return { ...state };
    }
}

export default userReducer
