import { NOTIFICATION, AUTH } from '../constants/action-types'

// ALERT
export const setAlertMessage = (message) => dispatch => {
    dispatch({
        type: NOTIFICATION.SET_MESSAGE,
        message
    });
};

export const clearAlertMessage = () => dispatch => {
    dispatch(setAlertMessage(''));
};

// AUTH
export const sendLoginData = (login, password) => dispatch => {
    dispatch({
        type: AUTH.SEND_LOGIN_DATA_REQUEST,
        login,
        password
    });
};
