import React from 'react';
import * as MUI from '../../MaterialUI';
import './posts.css';

const PostView = (props) => {
    return (
        <>
            <MUI.Card className='card'>
                <MUI.CardContent>
                    <MUI.Typography>
                        {props.post.title.rendered}
                    </MUI.Typography>
                </MUI.CardContent>
            </MUI.Card>
        </>
    );
};

export default PostView;