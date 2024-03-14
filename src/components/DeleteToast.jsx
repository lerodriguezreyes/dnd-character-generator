import React from "react";

function deleteToast() {
  return (
    <div className="toast">
      <img
        src="https://github.com/lerodriguezreyes/dnd-character-generator/blob/main/src/assets/toast.png?raw=true"
        style={{ height: "200 px" }}
      />
      <p>Character succesfully deleted!</p>
    </div>
  );
}

export default deleteToast;
