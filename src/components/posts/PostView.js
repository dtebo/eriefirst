import React from 'react';

const PostView = (props) => {
    return (
        <h1>{props.post.title.rendered}</h1>
    );
};

export default PostView;