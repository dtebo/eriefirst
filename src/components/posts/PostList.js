import {useState, useEffect} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

import * as MUI from '../../MaterialUI';

import './posts.css';

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

    const createMarkup = (html) => {
        return {__html: html};
    }

    return (
        <div className='post-list'>
            {posts.map(post => {
                return(<Link 
                            to={`${post.slug}`}
                            key={post.id}
                        >
                            <MUI.Card className='card'>
                                    <MUI.CardContent>
                                        <MUI.Typography>
                                            {post.title.rendered}
                                        </MUI.Typography>
                                    </MUI.CardContent>
                                    <MUI.CardContent>
                                        <div
                                            dangerouslySetInnerHTML={createMarkup(post.excerpt.rendered)}
                                        />
                                    </MUI.CardContent>
                                </MUI.Card>
                        </Link>);
            })}
        </div>
    );
};

export default PostList;