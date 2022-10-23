import React from "react";
import "./Widgets.css";
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterTweetEmbed,
} from "react-twitter-embed";
import SearchIcon from "@mui/icons-material/Search";

function Widgets() {
  return (
    <div className="widgets">
      <div className="widgets_input">
        <SearchIcon className="widgets_searchIcon" />
        <input placeholder="Search Twitter" type="text" className="search_input"/>
      </div>

      <div className="widgets_widgetContainer">
        <h2>What's happening</h2>

        <TwitterTweetEmbed tweetId={"1555182696791683074"} />

        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="RajAgri1682003"
          options={{ height: 400 }}
        />

        <TwitterShareButton
          url={"https://www.linkedin.com/in/raj-agrahari-36b656213/"}
          options={{ text: "#web dev is awesome", via: "RajAgri1682003" }}
        />
      </div>
    </div>
  );
}

export default Widgets;