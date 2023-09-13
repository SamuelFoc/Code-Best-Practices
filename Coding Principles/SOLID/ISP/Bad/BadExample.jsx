import React from "react";

// A monolithic interface
const MusicPlayer = ({ play, pause, stop, settings }) => {
  return (
    <div>
      <button onClick={play}>Play</button>
      <button onClick={pause}>Pause</button>
      <button onClick={stop}>Stop</button>
      <button onClick={settings}>Settings</button>
    </div>
  );
};

export default MusicPlayer;
