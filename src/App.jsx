import React, { useState, useEffect } from "react";

const App = () => {
  const [num, setNum] = useState(0);
  const [nums, setNums] = useState(0);
  useEffect(() => {
    alert("I am clicked");
    console.log("i am ok");
  }, [num]); // the empty array is use for only show alert msg at only first time loading page or refresh page.after that no alert msg.
  // but in empty array we pass num or nums then only show msg at first click then no msg again show.

  return (
    <>
      <button
        onClick={() => {
          setNum(num + 1);
        }}
      >
        Click me {num}
      </button>
      <br />
      <br />
      <button
        onClick={() => {
          setNums(nums + 1);
        }}
      >
        Click me {nums}
      </button>
    </>
  );
};
export default App;

// at the time add alert the setNum(num+1) is not working.
// Now we use useEffect (1. useEffect always expect a function) and both are working now but every click has a alert.
//
