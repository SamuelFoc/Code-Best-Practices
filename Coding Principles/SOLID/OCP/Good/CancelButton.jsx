//

// By creating new button components like SubmitButton and CancelButton,
// we extend functionality without modifying the original Button component,
// following OCP.

//

import React from "react";
import Button from "./Button";

function CancelButton({ onClick }) {
  return <Button onClick={onClick} label="Cancel" />;
}

export default CancelButton;
