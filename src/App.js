import './App.css';
import React, {useState, useEffect} from 'react';
import Post from './components/Post';

function App() {
  const [cats, setCats] = useState([]);
  const [catfacts, setCatfacts] = useState([]);
  const [posts, setPosts] = useState([]);
  const [subreddit, setSubreddits] = useState([]);

  useEffect(() => {
    fetch("https://www.reddit.com/r/cats.json").then(res => {
      if (res.status != 200) {
        console.log("Error reddit");
        return;
      }

      res.json().then(data => {
        if (data != null) {
          setPosts(data.data.children);
        }
      });
    })
  }, [subreddit]);

  return (
    <div className="App">
      <header className="App-header">
        Cats
      </header>

      <section>
      <div className="posts">
        {(posts !=null) ? posts.map((post, index) => <Post key={index} post={post.data} />) : ''}
      </div>
      </section>
    </div>
  );
}

export default App;
