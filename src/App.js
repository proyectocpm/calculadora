import logo from "./logo.svg";
import React, { useState } from "react";
import "./App.css";
import Componente1 from "./Componentes/Componente1";

function App() {
  const [currentSum, setCurrentSum] = useState(0);

  const sumar = (e) => {
    e.preventDefault();
    let currentNum = document.querySelector("#num").value;
    if (currentNum == "") return;
    let sum = currentSum + parseInt(currentNum);
    setCurrentSum(sum);
    document.querySelector("#num").value = "";
  };

  const restar = (e) => {
    e.preventDefault();
    let currentNum = document.querySelector("#num").value;
    if (currentNum == "") return;
    let sum = currentSum - parseInt(currentNum);
    setCurrentSum(sum);
    document.querySelector("#num").value = "";
  };
  const multiplicar = (e) => {
    e.preventDefault();
    let currentNum = document.querySelector("#num").value;
    if (currentNum == "") return;
    let sum = currentSum *parseInt(currentNum);
    setCurrentSum(sum);
    document.querySelector("#num").value = "";
  };
  const dividir = (e) => {
    e.preventDefault();
    let currentNum = document.querySelector("#num").value;
    if (currentNum == "") return;
    let sum = currentSum / parseInt(currentNum);
    setCurrentSum(sum);
    document.querySelector("#num").value = "";
  };

  return (
    <div className="App">
      <div className="menu">
        <h1>CALCULADORA</h1>
          <Componente1 currentSum={currentSum} />
          <div className ="Botones">
          <input type="text" id="num" placeholder="Ingrese" />
          <button style={{color:"blue"}}onClick={sumar}>Sumar</button>
          <button onClick={restar}> Restar</button>
          <button onClick={multiplicar}> Multiplicar</button>
          <button onClick={dividir}> dividir</button>
        </div>
      </div>
    </div>
  );
}
export default App;
