import React from "react";
import "./Widgets.css";
import SearchIcon from "@mui/icons-material/Search";

import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterTweetEmbed,
} from "react-twitter-embed";

function Widgets() {
  return (
    <div className="widgets">
      <div className="widgets_input">
        <SearchIcon className="widgets_searchIcon" />
        <input placeholder="Search Twitter" type="text" />
      </div>

      <div className="widgets_widgetContainer">
        <h2>What's happening?</h2>
       

      <TwitterTweetEmbed tweetId={"933354946111705097"} />

      <TwitterTimelineEmbed
        sourceType="profile"
        screenName="neerajnishad"
        options={{ height: 400 }}
      />

      <TwitterShareButton
        url={"https://facebook.com/cleverqazi"}
        options={{ text: "#reactjs is awesome", via: "saurabhnemade" }}
      />
    </div>
    </div>
  );
}

export default Widgets;
