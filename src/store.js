import { configureStore } from '@reduxjs/toolkit';
import usersReducer from './slices/UsersSlice';
import postsReducer from './slices/PostsSlice';
import albumsReducer from './slices/AlbumsSlice';
import commentsReducer from './slices/CommentsSlice';

const reducer = {
  users: usersReducer,
  posts:postsReducer,
  albums:albumsReducer,
  comments:commentsReducer,
};

export const store = configureStore({
  reducer: reducer,
  devTools: true,
});
