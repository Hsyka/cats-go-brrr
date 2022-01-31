import React from 'react';

function Post(props) {
  return (

    <post>
        <a href={ "https://www.reddit.com" + props.post.permalink } target="_blank">
            <h3> { props.post.title } </h3>
        </a>

    </post>
  )
  
  
}

export default Post;
