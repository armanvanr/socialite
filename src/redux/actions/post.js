import postService from "../../services/post";

import { CREATE_POST_SUCCESS, CREATE_POST_FAIL, SET_MESSAGE, FETCH_POSTS } from "./types";


export const addPost = (content, image, userId) => dispatch => {
    console.log('image in actions : ', image)
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

export const fetchPosts = () => async dispatch => {
    try {
        const res = await postService.getPosts();
        console.log('res', res.data)
        dispatch({
            type: FETCH_POSTS,
            payload: res.data,
        });
    } catch (err) {
        console.log(err);
    };
};