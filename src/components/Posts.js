import React from 'react';
import Post from './Post';

export default ({posts}) => {
  if (!posts.length) {
    return <p className="text-center">Пока нет постов...</p>
  }
  return posts.map(post => <Post post={post} key={post} />)
}
