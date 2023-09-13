//

// By creating new button components like SubmitButton and CancelButton,
// we extend functionality without modifying the original Button component,
// following OCP.

//

import React from "react";
import Button from "./Button";

function SubmitButton({ onClick }) {
  return <Button onClick={onClick} label="Submit" />;
}

export default SubmitButton;
