import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import Axios from '../../API/Axios';

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
    const response = await Axios.get('/posts');
    console.log(response.data);
    return response.data;
});

export const createPost = createAsyncThunk('posts/createPost', async (data) => {
    const postData = { data }
    const response = await Axios.post('/posts', postData);
    return response.data;
});

const postSlice = createSlice({
    name: 'posts',
    initialState: {
        posts: [],
        loading: false,
        error: null
    },
    reducers: {
        addPost: (state, action) => {
            state.posts.push(action.payload);
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchPosts.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchPosts.fulfilled, (state, action) => {
                state.loading = false;
                state.posts = action.payload;
            })
            .addCase(fetchPosts.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
    }
});


export const { addPost } = postSlice.actions;
export default postSlice.reducer;
