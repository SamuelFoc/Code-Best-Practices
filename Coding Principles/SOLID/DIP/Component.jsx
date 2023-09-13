//

// The Component component accepts a logger function as a prop,
// allowing you to inject different logging implementations.
// This adheres to DIP by depending on abstractions (functions)
// rather than concrete implementations.

//

import React from "react";
import Logger from "./Logger";

function Component({ logger }) {
  const handleClick = () => {
    logger("Button clicked");
  };

  return <button onClick={handleClick}>Click me</button>;
}

export default Component;
