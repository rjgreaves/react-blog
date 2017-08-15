import { FETCH_POSTS, CREATE_POST } from './types';
import axios from 'axios';

const ROOT_URL = 'http://reduxblog.herokuapp.com/api/';
const API_KEY = '?key=yellowmouse';

export function fetchPosts() {
    const url = `${ROOT_URL}posts${API_KEY}`;
    const request = axios.get(url);
    return {
        type: FETCH_POSTS,
        payload: request
    };
}

export function createPost(values, cb) {
    const url = `${ROOT_URL}/posts${API_KEY}`;
    const request = axios.post(url, values);
    request.then(cb);
    return {
        type: CREATE_POST,
        payload: request
    }
}