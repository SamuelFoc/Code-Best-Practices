//

// By splitting the monolithic interface into smaller ones (MusicControls and SettingsControls),
// we adhere to ISP, allowing components to implement only the interfaces they need.

//

import React from "react";

// Splitting the interface into smaller ones
const MusicControls = ({ play, pause, stop }) => {
  return (
    <div>
      <button onClick={play}>Play</button>
      <button onClick={pause}>Pause</button>
      <button onClick={stop}>Stop</button>
    </div>
  );
};

export default MusicControls;
