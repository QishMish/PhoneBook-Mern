import axios from 'axios'
import {
    LOGIN_START,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    REGISTER_START,
    REGISTER_FAILURE,
    REGISTER_SUCCESS,
    LOG_OUT
    } from './userTypes'

//async actions
export const userLogIn = (data) => {
    return (dispatch) => {
        dispatch(loginStart())
        axios
        .post('/auth/login', data)
        .then(response => {
            console.log(response)
            const user = response.data.data.username
            dispatch(loginSuccess(user))
        })
        .catch(error => {
            dispatch(loginFailure(error.message))
        })
    }
}
export const userLogOut = () => {
    return (dispatch) => {
        axios
        .post('/auth/logout')
        .then(() => {
            dispatch(logOut())
        })
        .catch(error => {
            console.log(error)
        })
    }
}
//login actions
export const loginStart = () => ({
    type: LOGIN_START,
  });   
export const loginSuccess = (user) => ({
    type: LOGIN_SUCCESS,
    payload: user,
});
export const loginFailure = () => ({
    type: LOGIN_FAILURE,
});

//register actions
// export const registerStart = () => ({
//     type: REGISTER_START,
// });   
// export const registerFailure = () => ({
//     type: REGISTER_SUCCESS,
// });
// export const registerSuccess = (user) => ({
//     type: REGISTER_FAILURE,
//     payload: user,
// });   

//log out
export const logOut = () => ({
    type: LOG_OUT,
});