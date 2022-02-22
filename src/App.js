import './App.css';
import React, {useState, useEffect} from 'react';
import Article from './components/article';

function App() {
  const [cats, setCats] = useState([]);
  const [catfacts, setCatfacts] = useState([]);
  const [articles, setArticles] = useState([]);

// Reddit API
  useEffect(() => {
    fetch("https://www.reddit.com/r/cats.json").then(
      res => {
        if (res.status !== 200) {
          console.warn("Something is wrong with the reddit api.");
          return;
        }
        res.json().then(data => {
          if (data != null)
            setArticles(data.data.children);

        console.log(data);
        });
      }
    )
  }, []);


  // Cat API

  return (
    <div className="App">
      <header>
        <h1>Cats</h1>
        
      </header>

      <section className='hero'>
      <img className='cat' src='https://cataas.com/cat' />
      </section>

      <section className="redditFeed">
        <div className="articles">
          {(articles != null) ? articles.map((article, index) => <Article key={index} article={article.data} />) : ''}
        </div>
      </section>
    </div>
  );
}

export default App;