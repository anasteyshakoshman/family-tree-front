import { AUTH, NOTIFICATION } from '../constants/action-types';

const initialState = {
    message: ''
};

export const notification = (state = initialState, action) => {
    switch (action.type) {
        case NOTIFICATION.SET_MESSAGE:
        case AUTH.SEND_LOGIN_DATA_FAILURE: {
            return {
                ...state,
                message: action.message
            };
        }

        default:
            return state;
    }
};

export default notification;
