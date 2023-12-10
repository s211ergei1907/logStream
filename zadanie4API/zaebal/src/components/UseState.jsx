import React, { useState } from "react";

export const UseState = () => {
  const [numbers, setNumbers] = useState([1, 2, 3]);

  const [state, setState] = useState(0);
  const [num, setNum] = useState(0);

  const onAddNewLi = () => {
    //Добавление в конец массива элемента
    // numbers.push(numbers.length + 1)
    setNumbers([...numbers, numbers.push(numbers.length)]);
  };

  return (
    <>
      <div className="wrapperSrate">
        {/*<button*/}
        {/*  onClick={() => {*/}
        {/*    setState(state + 1);*/}
        {/*  }}*/}
        {/*>*/}
        {/*  +*/}
        {/*</button>*/}
        {/*<button*/}
        {/*  onClick={() => {*/}
        {/*    setState(state - 1);*/}
        {/*  }}*/}
        {/*>*/}
        {/*  -*/}
        {/*</button>*/}
        {/*<p>Число равно: {state}</p>*/}

        <ul>
          {numbers.map((num, index) => (
            <li key={index}>{num}</li>
          ))}
        </ul>
        <button onClick={() => onAddNewLi()}>Новое число:</button>
      </div>
    </>
  );
};
