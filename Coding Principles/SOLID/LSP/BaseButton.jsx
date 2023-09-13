import React from "react";

function BaseButton({ label, onClick }) {
  return <button onClick={onClick}>{label}</button>;
}

export default BaseButton;
