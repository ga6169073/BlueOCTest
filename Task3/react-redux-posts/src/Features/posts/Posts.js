import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { DataGrid } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';
import { Box, Button } from '@mui/material';
import PostForm from './PostForm';

const Posts = () => {
    const { posts, loading, error } = useSelector(state => state.posts);
    const [showForm, setShowForm] = useState(false);
    const columns = [
        {
            field: 'id', headerName: 'ID', width: 90,
        },
        {
            field: 'userId', headerName: 'User ID', width: 90,
        },
        {
            field: 'title', headerName: 'Title', flex: 1,
        },
        {
            field: 'body', headerName: 'Body', flex: 1.5,
            renderCell: (cellValue) => {
                return (
                    <Box sx={{
                        maxHeight: 'inherit',
                        width: '100%',
                        whiteSpace: 'initial',
                        lineHeight: '1rem',
                        display: 'flex',
                        alignItems: 'center',
                        paddingY: "0.25rem",
                    }}
                    >
                        {cellValue.value}
                    </Box>
                )
            }
        },
    ]
    const rows = loading ? [] : posts
    const paginationModel = { page: 0, pageSize: 10 }

    const handleAddPost = () => {
        setShowForm(!showForm)
    }
    if (error) return <p style={{ textAlign: 'center' }}>Error: {error}</p>;


    return (
        <>
            <div>
                <h1 style={{ textAlign: 'center' }}>Posts</h1>
            </div>
            <Button size="small" variant="contained" onClick={handleAddPost}>
                Add a post
            </Button>
            {showForm && <PostForm toggle={handleAddPost} />}
            <Paper sx={{ height: '100%', width: '100%' }}>
                <DataGrid
                    rows={rows}
                    columns={columns}
                    initialState={{ pagination: { paginationModel } }}
                    pageSizeOptions={[5, 10]}
                    loading={loading}
                    sx={{
                        boxShadow: 2,
                        border: 2,
                        borderColor: 'primary.light',
                        '& .MuiDataGrid-cell:hover': {
                            color: 'primary.main',
                        },
                    }}


                />
            </Paper>
        </>
    );

}

export default Posts