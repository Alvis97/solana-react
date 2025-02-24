import React from 'react'
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h1>Do you also find Crypto hard but interesting? &#x1F62B; </h1>
      <h2>That makes two of us, Let's learn together! &#x1F60B; </h2>
      <Link to="/blog">Go to Blog</Link>

    </div>
  )
}

export default Home;
