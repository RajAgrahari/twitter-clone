import React, { forwardRef ,useState} from "react";
import "./Post.css";
import { Avatar } from "@mui/material";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import IosShareRoundedIcon from '@mui/icons-material/IosShareRounded';
import RepeatIcon from "@mui/icons-material/Repeat";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import VerifiedIcon from '@mui/icons-material/Verified';
import Tooltip from '@mui/material/Tooltip';
import db from "./firebase.js";
import firebase from 'firebase/compat/app';
// import {doc,setDoc} from 'firebase/firestore';

const Post = forwardRef(
  ({key,displayName, username, verified, text, image, avatar,comment_count,retweet_count,like_count,timestamp}, ref) => {

    const [Likes,setLikes] = useState(like_count);
    const [likeClicked,setLikeClicked] = useState(false);

    const handleLikeCountIncrement = async(e) => {
      e.preventDefault();

      if(!likeClicked)
      setLikes(Likes + 1);
      else
      setLikes(Likes - 1);
      setLikeClicked(likeClicked => !likeClicked);
      
      var idd = "";
        db.collection('posts').get().then((snapshot) => {
          
            snapshot.docs.forEach(doc => {
              console.log(doc.data());
              if(doc.data().text === text)
              {
                console.log(doc.data().timestamp);
                idd = doc.id;
              }
            })
        })
        db.collection('posts').doc(idd).update({like_count:Likes})
        console.log(like_count);
  }

  const handleRetweet = (e) => {
    e.preventDefault();

    db.collection("posts").add({
      displayName: "Raj Agrahari",
      username: "RajAgri1682003",
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      verified: false,
      text: text,
      image: image,
      avatar:
        "https://pbs.twimg.com/profile_images/1420941656296099844/Uhei-VU2_400x400.jpg",
      comment_count: comment_count,
      retweet_count: retweet_count,
      like_count:like_count
    });


  }
    return (
      <div className="post" ref={ref}>
        <div className="post_avatar">
          <Avatar src={avatar} />
        </div>
        <div className="post_body">
          <div className="post_header">
            <div className="post_headerText">
              <h3>
                {displayName}{" "}
                <span className="post_headerSpecial">
                  {verified && <VerifiedIcon className="post_badge" />}{" "}@
                  {username}
                </span>
              </h3>
            </div>
            <div className="post_headerDescription">
              <p>{text}</p>
            </div>
          </div>
          <img src={image} alt="" />
          <div className="post_footer">
            <Tooltip title="comment">
            <div className="post_comment"><ChatBubbleOutlineIcon className="post_icon" fontSize="small" /><p>{comment_count}</p></div>
            </Tooltip>
            <Tooltip title="retweet">
            <div className="post_retweet" onClick={handleRetweet}><RepeatIcon className="post_icon" fontSize="small" /><p>{retweet_count}</p></div>
            </Tooltip>
            <Tooltip title="like">
            <div className={likeClicked ? "post_heart_color" : "post_heart"} onClick={handleLikeCountIncrement}><FavoriteBorderIcon className="post_icon" fontSize="small" /><p>{Likes}</p></div>
            </Tooltip>
            <Tooltip title="share">
            <div className="post_publish"><IosShareRoundedIcon className="post_icon" fontSize="small" /></div>
            </Tooltip>
          </div>
        </div>
      </div>
    );
  }
);

export default Post;
