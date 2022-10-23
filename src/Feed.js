import React, { useEffect, useState } from 'react';
import TweetBox from './TweetBox.js';
import './Feed.css';
import Post from './Post.js';
import db from './firebase.js';
import FlipMove from "react-flip-move";

function Feed()
{
    const [posts, setPosts] = useState([]);


    useEffect(() => {
        db.collection("posts").orderBy("timestamp","desc").onSnapshot((snapshot) =>
          setPosts(snapshot.docs.map((doc) => doc.data()))
        );
      }, []);

    
    return (
        <div className='feed'>
            {/*HEADER */}
            <div className='feed_header'>
                <h2>Home</h2>
            </div>

            {/* TWEETBOX */}
            <TweetBox />

            {/* POST */}
            <FlipMove>
        {posts.map((post) => (
          <Post
            key={post.id}
            displayName={post.displayName}
            username={post.username}
            verified={post.verified}
            text={post.text}
            avatar={post.avatar}
            image={post.image}
            comment_count={post.comment_count}
            retweet_count={post.retweet_count}
            like_count={post.like_count}
            timestamp={post.timestamp}
          />
        ))}
        </FlipMove>
            {/* POST */}
            {/* POST */}
            {/* POST */}
            {/* POST */}
            {/* POST */}
            {/* POST */}
            {/* POST */}
        </div>
    );
}
export default Feed;