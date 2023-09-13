import React from "react";
import BaseButton from "./BaseButton";

function SecondaryButton({ label, onClick }) {
  return (
    <BaseButton
      label={label}
      onClick={onClick}
      style={{ backgroundColor: "gray", color: "black" }}
    />
  );
}

export default SecondaryButton;
