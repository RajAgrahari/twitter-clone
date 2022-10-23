import React,{useState} from 'react';
import './TweetBox.css';
import {Avatar,Button} from '@mui/material';
import db from "./firebase.js";
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

function TweetBox() {
  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");

  const sendTweet = (e) => {
    e.preventDefault();

    db.collection("posts").add({
      displayName: "Raj Agrahari",
      username: "RajAgri1682003",
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      verified: false,
      text: tweetMessage,
      image: tweetImage,
      avatar:
        "https://pbs.twimg.com/profile_images/1420941656296099844/Uhei-VU2_400x400.jpg",
      comment_count: 0,
      retweet_count: 0,
      like_count:0
    });

    setTweetMessage("");
    setTweetImage("");
  };

  return (
    <div className="tweetbox">
      <form>
        <div className="tweetbox_input">
          <Avatar src="https://pbs.twimg.com/profile_images/1420941656296099844/Uhei-VU2_400x400.jpg" />
          <input
            onChange={(e) => setTweetMessage(e.target.value)}
            value={tweetMessage}
            placeholder="What's happening?"
            type="text"
          />
        </div>
        <input
          value={tweetImage}
          onChange={(e) => setTweetImage(e.target.value)}
          className="tweetbox_imageinput"
          placeholder="Optional: Enter image URL which you wanna post"
          type="text"
        />

        <Button
          onClick={sendTweet}
          type="submit"
          className="tweetbox_button"
        >
          Tweet
        </Button>
      </form>
    </div>
  );
}

export default TweetBox;