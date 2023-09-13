import React from "react";
import BaseButton from "./BaseButton";

function PrimaryButton({ label, onClick }) {
  return (
    <BaseButton
      label={label}
      onClick={onClick}
      style={{ backgroundColor: "blue", color: "white" }}
    />
  );
}

export default PrimaryButton;
