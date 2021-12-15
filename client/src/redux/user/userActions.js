import {
    LOGIN_START,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    REGISTER_START,
    REGISTER_FAILURE,
    REGISTER_SUCCESS,
    LOG_OUT
    } from './userTypes'

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
export const registerStart = () => ({
    type: REGISTER_START,
});   
export const registerFailure = () => ({
    type: REGISTER_SUCCESS,
});
export const registerSuccess = (user) => ({
    type: REGISTER_FAILURE,
    payload: user,
});   

//log out
export const logOut = () => ({
    type: LOG_OUT,
});