import { NOTIFICATION } from '../constants/action-types';

const initialState = {
    message: ''
};

export const notification = (state = initialState, action) => {
    switch (action.type) {
        case NOTIFICATION.SET_MESSAGE: {
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
