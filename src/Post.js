import React, { forwardRef } from "react";
import "./Post.css";
import RepeatIcon from "@mui/icons-material/Repeat";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import Avatar from "@mui/material/Avatar";
import VerifiedIcon from "@mui/icons-material/Verified";
import PublishIcon from "@mui/icons-material/Publish";

const Post = forwardRef(
  ({ displayName, username, verified, text, image, avatar }, ref) => {
    return (
      <div className="post" ref={ref}>
        <div className="post_avatar">
          <Avatar src={avatar} />

          <div className="post_body">
            <div className="post_header">
              <div className="post_headerText">
                <h3>
                  {displayName}
                  <span className="post_headerSpecial">
                    {verified && <VerifiedIcon className="post_badge" />}
                    {username}
                  </span>
                </h3>
              </div>
              <div className="post_headerDescription">
                <p>{text}</p>
              </div>
            </div>
            <img src={image} alt="elon musk" />
            <div className="post_footer">
              <ChatBubbleOutlineIcon fontSize="small" />
              <RepeatIcon fontSize="small" />
              <FavoriteBorderIcon fontSize="small" />
              <PublishIcon fontSize="small" />
            </div>
          </div>
        </div>
      </div>
    );
  }
);

export default Post;