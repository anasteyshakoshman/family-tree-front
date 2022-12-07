import { AUTH } from '../constants/action-types';
import { NOT_AUTH_USER_ID } from '../constants/primitives';

const initialState = {
    userId: NOT_AUTH_USER_ID,
    isLoading: false
};

export const auth = (state = initialState, action) => {
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
                userId: action.userId
            };
        }

        case AUTH.SEND_LOGIN_DATA_FAILURE: {
            return {
                ...state,
                isLoading: false,
                userId: NOT_AUTH_USER_ID
            };
        }

        default:
            return state;
    }
};

export default auth;
