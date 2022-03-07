import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';


export const getPosts = createAsyncThunk(
    'posts/getPosts',
    async (thunkAPI) => {
      const res = await fetch('https://jsonplaceholder.typicode.com/posts').then(
      (data) => data.json()
    )
    console.log('posts', res)
    return res
  })

const initialState = {
    isLoading: false,
    posts:[],
    status: "",
    message: "",
};

const postsSlice = createSlice({
    name: "posts",
    initialState,
    reducers: {
        //reducers
    },
    extraReducers: {
        [getPosts.fulfilled]: (state, { payload }) => {
            state.isFetching = false;
            state.isSuccess = true;
            state.posts = payload
        },
        [getPosts.pending]: (state) => {
            state.isFetching = true;
        },
        [getPosts.rejected]: (state, { payload }) => {
            state.isFetching = false;
            state.isError = true;
            state.errorMessage = payload.message;
        }
    
    },
});

const { reducer, actions } = postsSlice;
export const postsSelector = state => state.posts
export default reducer;
