import axios from 'axios';
import React, {useState, useEffect} from 'react';

const PostView = (props) => {
    const [post, setPost] = useState();

    useEffect(() => {
        const slug = props.match.params.slug;

        axios.get(`https://eriefirst.org/wp-json/wp/v2/posts?slug=${slug}`)
            .then(post => {
                console.log(post);
                setPost(post.data[0]);
            })
            .catch(err => console.error(err));
    }, [props.match.params.slug]);

    const createMarkup = (html) => {
        return {__html: html};
    };

    return (
        /* FIX BUG WHERE CONTENT DOESN'T CONSISTENTLY RENDER */
        <div>
            <h1>{post && post.title.rendered}</h1>
            <div
                dangerouslySetInnerHTML={createMarkup(post.content.rendered)}
            />
        </div>
    );
};

export default PostView;