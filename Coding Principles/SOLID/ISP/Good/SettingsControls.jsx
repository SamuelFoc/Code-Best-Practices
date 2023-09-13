//

// By splitting the monolithic interface into smaller ones (MusicControls and SettingsControls),
// we adhere to ISP, allowing components to implement only the interfaces they need.

//

import React from "react";

// Another smaller interface
const MusicSkip = ({ settings }) => {
  return (
    <div>
      <button onClick={settings}>Settings</button>
    </div>
  );
};

export default MusicSkip;
