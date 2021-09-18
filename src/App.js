import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import './App.css';
import PostList from './components/posts/PostList';
import PostView from './components/posts/PostView';
import Home from './components/home/Home';

function App() {
  

  return (
    <Router>
      <div className="App">
        <section className='site-contents'>
          <Route exact path='/' component={Home} />
          <Route path='/posts' component={PostList} />
          <Route path='/:slug' component={PostView} />
        </section>
      </div>
    </Router>
  );
}

export default App;
