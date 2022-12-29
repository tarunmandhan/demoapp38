import React, { useState } from "react";

const App = () => {
  const [num, setNum] = useState(0);

  return (
    <>
      <button
        onClick={
          (() => {
            setNum(num + 1);
          },
          () => {
            alert("I am clicked");
          })
        }
      >
        Click me {num}
      </button>
    </>
  );
};
export default App;
