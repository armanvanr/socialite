import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT,
    SET_MESSAGE,
} from './types';

import authService from '../../services/auth';

export const register = (firstName, lastName, email, password) => dispatch => {
    return authService.register(firstName, lastName, email, password).then(
        response => {
            dispatch({
                type: REGISTER_SUCCESS,
            });

            dispatch({
                type: SET_MESSAGE,
                payload: response.data.message,
            });
            // console.log('Thunk payload message:', payload);
            return Promise.resolve();
        },
        error => {
            const message = error.response.data.message;

            dispatch({
                type: REGISTER_FAIL,
                payload: message,
            });

            dispatch({
                type: SET_MESSAGE,
                payload: message,
            });

            return Promise.reject();
        },
    );
};

export const login = (email, password) => dispatch => {
    return authService.login(email, password).then(
        data => {
            dispatch({
                type: LOGIN_SUCCESS,
                payload: { user: data },
            });

            return Promise.resolve();
        },
        error => {
            const message = error.response.data.message;

            dispatch({
                type: LOGIN_FAIL,
            });

            dispatch({
                type: SET_MESSAGE,
                payload: message,
            });

            return Promise.reject();
        },
    );
};

export const logout = () => dispatch => {
    authService.logout();

    dispatch({
        type: LOGOUT,
    });
};
