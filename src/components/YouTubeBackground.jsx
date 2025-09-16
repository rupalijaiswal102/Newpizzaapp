// File: src/components/YouTubeBackground.jsx

import React from "react";
import YouTube from "react-youtube";
import "./YouTubeBackground.css";

const YouTubeBackground = () => {
  const opts = {
    height: '100%',
    width: '100%',
    playerVars: {
      autoplay: 1,
      controls: 0,
      showinfo: 0,
      modestbranding: 1,
      loop: 1,
      mute: 1,
      playlist: "lFZ5X4uXU-c", // IMPORTANT: video ID again for loop
    },
  };

  return (
    <div className="yt-container">
      <YouTube videoId="lFZ5X4uXU-c" opts={opts} className="yt-video" />
      <div className="yt-overlay">
        <h1>Welcome to Zomato</h1>
        <p>Discover great food & restaurants</p>
        <button className="btn btn-light mt-3">Get Started</button>
      </div>
    </div>
  );
};

export default YouTubeBackground;
