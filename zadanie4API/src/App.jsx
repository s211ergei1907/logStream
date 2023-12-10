import "./index.css";
import arr from "./data.json";
import { Card } from "./components/Card";
import { createBrowserRouter } from "react-router-dom";
import { Data } from "./components/Data";
import { Papa } from "./components/Papa";
import React from "react";

function App() {
  return (
    <>
      <div className="contaier">
        {/*Отрисовка карточек*/}
        {/*{arr.map(({ title, userId, body }) => (*/}
        {/*  <Card userId={userId} title={title} body={body} />*/}
        {/*))}*/}
      </div>
    </>
  );
}

export default App;
