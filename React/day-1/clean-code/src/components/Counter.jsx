import React, { useState } from "react";

export default function Counter() {
  let C_value = 0;
  const [state, setState] = useState(C_value);

  const Inc = () => {
    setState(state + 1);
  };

  const Dec = () => {
    setState(state - 1);
  };

  let design = {
    color: "red",
    backgroundColor: "white",
  };
  console.log(state);
  return (
    <>
      <h1 style={design}>Counter</h1>
      <h1>{state}</h1>
      <button onClick={Inc}>+</button>
      <button onClick={Dec}>-</button>
    </>
  );
}
