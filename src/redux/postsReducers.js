import { CREATE_POST } from './constants';

const initialState = {
  posts: [],
  fetchedPosts: [],
};

export const postsReducers = (state = initialState, { type, payload }) => {
  switch (type) {
    case CREATE_POST:
      return { ...state, posts: [...state.posts, payload]}
    default: return state
  }
};
