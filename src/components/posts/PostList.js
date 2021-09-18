import {useState, useEffect} from 'react';
import axios from 'axios';

import PostView from './PostView';

const PostList = (props) => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
      axios.get("http://eriefirst.org/wp-json/wp/v2/posts")
        .then(resp => {
          console.log(resp.data);
          setPosts(resp.data);
        })
        .catch(err => {
          console.error(err);
        });
    }, []);

    return (
        <div className='post-list'>
            {posts && posts.map(post => {
                return(<PostView
                            key={post.id}
                            post={post} 
                       />);
            })}
        </div>
    );
};

export default PostList;