import axios from 'axios'
import {
    LOGIN_START,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    LOG_OUT
    } from './userTypes'


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

//log out
export const logOut = () => ({
    type: LOG_OUT,
});