import {CREATE_POST, FETCH_POSTS} from './constants';

const initialState = {
  posts: [],
  fetchedPosts: [],
};

export const postsReducers = (state = initialState, { type, payload }) => {
  switch (type) {
    case CREATE_POST:
      return { ...state, posts: [...state.posts, payload]};
    case FETCH_POSTS:
      return { ...state, fetchedPosts: payload };
    default: return state
  }
};
