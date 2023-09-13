//

// In this way, you can see how PrimaryButton and SecondaryButton
// are substitutable for BaseButton without affecting the correctness of the program.
// This adheres to the Liskov Substitution Principle.

//

import React from "react";
import BaseButton from "./BaseButton";
import PrimaryButton from "./PrimaryButton";
import SecondaryButton from "./SecondaryButton";

function App() {
  const handleButtonClick = () => {
    console.log("Button clicked");
  };

  return (
    <div>
      <BaseButton label="Generic Button" onClick={handleButtonClick} />
      <PrimaryButton label="Primary Button" onClick={handleButtonClick} />
      <SecondaryButton label="Secondary Button" onClick={handleButtonClick} />
    </div>
  );
}

export default App;
