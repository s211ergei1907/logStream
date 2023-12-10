import React, { useEffect, useState } from "react";
import { logDOM } from "@testing-library/react";

export const Request = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("https://653d2abef52310ee6a99f273.mockapi.io/prikol")
      .then((res) => res.json())
      .then((arr) => {
        setItems(arr);
      });
  }, []);

  console.log(items);
  return (
    <>
      <div></div>
    </>
  );
};
