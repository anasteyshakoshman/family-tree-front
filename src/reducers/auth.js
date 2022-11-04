import { AUTH } from '../constants/action-types';

const initialState = {
    login: '',
    password: '',
    isLoading: false
};

export const notification = (state = initialState, action) => {
    switch (action.type) {
        case AUTH.SEND_LOGIN_DATA_REQUEST: {
            return {
                ...state,
                isLoading: true
            };
        }

        case AUTH.SEND_LOGIN_DATA_SUCCESS: {
            return {
                ...state,
                isLoading: false,
                login: action.login,
                password: action.password
            };
        }

        default:
            return state;
    }
};

export default notification;
