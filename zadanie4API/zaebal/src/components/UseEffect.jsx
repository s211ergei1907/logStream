import React, { useState, useEffect } from "react";

export const UseEffect = () => {
  const [firstState, setfirstState] = useState(false);
  const [secondState, setSecondState] = useState(false);
  const [thirdState, setTwirdState] = useState(false);

  useEffect(() => {
    console.log("Маша очень красивая");
  }, [firstState, secondState]);

  return (
    <>
      <div className="useEffect">
        <button
          style={{ background: firstState ? "red" : "white" }}
          className="useEffect-button1"
          onClick={() => setfirstState(!firstState)}
        >
          Первая
        </button>
        <p>sdfsd</p>
        <button
          style={{ background: secondState ? "red" : "white" }}
          className="useEffect-button2"
          onClick={() => setSecondState(!secondState)}
        >
          Вторая
        </button>
        <p>sdskl;lk;s</p>
        <button
          style={{ background: thirdState ? "red" : "white" }}
          onClick={() => setTwirdState(!thirdState)}
          className="useEffect-button3"
        >
          Третья
        </button>
      </div>
    </>
  );
};
