import {CREATE_POST, FETCH_POSTS} from './constants';

export function createPost(post) {
    return {
        type: CREATE_POST,
        payload: post,
    }
}

export function fetchedPosts() {
    return async (dispatch) => {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5');
        const data = await res.json();
        dispatch({ type: FETCH_POSTS, payload: data});
    }
}
