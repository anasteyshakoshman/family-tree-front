import * as Api from '../api';
import { NOTIFICATION, AUTH, GET_TREE } from '../constants/action-types'

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
export const sendLoginData = (login, password) => async (dispatch) => {
    dispatch({
        type: AUTH.SEND_LOGIN_DATA_REQUEST
    });

    try {
        const result = await Api.sendLoginData(login, password);

        console.log(result);

        if (result?.status !== 200 || !result?.data?.userID) {
            throw new Error();
        }

        dispatch({
            type: AUTH.SEND_LOGIN_DATA_SUCCESS,
            userId: result.data.userID
        });

        return true;
    } catch (err) {
        dispatch({
            type: AUTH.SEND_LOGIN_DATA_FAILURE,
            message: 'Что-то пошло не так, попробуйте еще раз :)'
        });

        return false;
    }
};

// GET_TREE
export const getTreeByUserId = (userId) => async (dispatch) => {
    dispatch({
        type: GET_TREE.GET_TREE_FAILURE
    });

    try {
        const result = await Api.getFamilyTree(userId);

        console.log(result);

        if (result?.status !== 200 || !result?.data?.list) {
            throw new Error();
        }

        dispatch({
            type: GET_TREE.GET_TREE_SUCCESS,
            list: result.data.list
        });

        return true;
    } catch (err) {
        dispatch({
            type: GET_TREE.GET_TREE_FAILURE,
            message: 'Что-то пошло не так, попробуйте еще раз :)'
        });

        return false;
    }
};
