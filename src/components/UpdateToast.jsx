import "../styles/toasts.css";
import { useState, useEffect } from "react";

function UpdateToast() {
  return (
    <div className="toast">
      <img
        src="https://github.com/lerodriguezreyes/dnd-character-generator/blob/main/src/assets/toast.png?raw=true"
        style={{ height: "200 px" }}
      />
      <p>Character succesfully edited!</p>
    </div>
  );
}

export default UpdateToast;
