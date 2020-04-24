import { CHECK_LOGGED_IN, LOG_OUT } from '../actions/types';

const initialState = {
    isLoggedIn: false
};

export default (state = initialState, action) => {
    switch (action.type) {
        case CHECK_LOGGED_IN: {
            return {
                ...state,
                isLoggedIn: true,
                ...action.payload
            };
        }
        case LOG_OUT: {
            let clone = Object.assign({}, state);
            delete clone['username'];
            delete clone['name'];
            return {
                ...clone,
                isLoggedIn: false
            };
        }
        default:
            return state;
    }
};
