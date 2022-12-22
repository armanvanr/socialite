import axios from 'axios';

const API_URL = 'http://localhost:3001';

const createPost = (content, image, userId) => {
    return axios.post(`${API_URL}/posts`, {
        content,
        image,
        userId
    });
};

const getPosts = () => {
    return axios.get(`${API_URL}/posts`);
}

const removePost = id => {
    return axios.delete(`/posts/${id}`);
};

const postService = {
    createPost,
    getPosts
};

export default postService;
