import React, { useState, useEffect } from "react";

const App = () => {
  const [num, setNum] = useState(0);
  useEffect(() => {
    alert("I am clicked");
  });

  return (
    <>
      <button
        onClick={() => {
          setNum(num + 1);
        }}
      >
        Click me {num}
      </button>
    </>
  );
};
export default App;

// at the time add alert the setNum(num+1) is not working. Now we use useEffect (1. useEffect always expect a function
