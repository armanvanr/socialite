import axios from 'axios';

const API_URL = 'http://localhost:3001';

const createPost = (content, image, userId) => {
    return axios.post(`${API_URL}/posts`, {
        content,
        image,
        userId
    });
};

const postService = {
    createPost,
};

export default postService;
