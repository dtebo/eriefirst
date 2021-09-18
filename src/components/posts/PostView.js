import React from 'react';
import * as MUI from '../../MaterialUI';

const PostView = (props) => {
    return (
        <>
            <h1>{props.post.title.rendered}</h1>
            <MUI.Button 
                variant='contained'
            >
                Click to View
            </MUI.Button>
        </>
    );
};

export default PostView;