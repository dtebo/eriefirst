import {useEffect} from 'react';
import './App.css';

function App() {
  useEffect(() => {
    axios.get("http://eriefirst.org/wp-json/wp/v2/posts")
      .then(resp => {
        console.log(resp);
      })
      .catch(err => {
        console.error(err);
      });
  }, []);

  return (
    <div className="App">
      
    </div>
  );
}

export default App;
