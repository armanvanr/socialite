import postService from "../../services/post";

import { CREATE_POST_SUCCESS, CREATE_POST_FAIL, SET_MESSAGE } from "./types";

export const addPost = (content, image, userId) => dispatch => {
    // console.log('axios post', content, image, userId)
    return postService.createPost(content, image, userId).then(
        data => {
            dispatch({
                type: CREATE_POST_SUCCESS,
                payload: { post: data },
            });

            return Promise.resolve();
        },
        error => {
            const message = error.response.data.message;

            dispatch({
                type: CREATE_POST_FAIL,
            });

            dispatch({
                type: SET_MESSAGE,
                payload: message,
            });

            return Promise.reject();
        },
    );
};