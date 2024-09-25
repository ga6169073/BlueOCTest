import React, { useState } from 'react';
import { TextField, Button, Container, Box } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { addPost } from './postSlice';

const PostForm = ({ toggle }) => {
    const [userId, setUserId] = useState('');
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const { posts } = useSelector((state) => state.posts);
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        let newId = posts ? posts.length + 1 : 1;
        if (userId && title && body) {
            const newPost = {
                id: newId,
                userId: userId,
                title,
                body,
            };
            dispatch(addPost(newPost));
            setUserId('');
            setTitle('');
            setBody('');
            toggle();
        }
    };

    return (
        <Container sx={{ marginTop: 2 }}>
            <Box
                component="form"
                onSubmit={handleSubmit}
                sx={{ display: 'flex', flexDirection: 'column', gap: 1, mb: 2 }}
            >
                <TextField
                    label="User ID"
                    variant="outlined"
                    value={userId}
                    onChange={(e) => setUserId(e.target.value)}
                    required
                />
                <TextField
                    label="Title"
                    variant="outlined"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                />
                <TextField
                    label="Body"
                    variant="outlined"
                    multiline
                    rows={4}
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                    required
                />
                <Button variant="contained" type="submit" color="primary">
                    Add Post
                </Button>
            </Box>
        </Container>
    );
};

export default PostForm;
