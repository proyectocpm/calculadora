import React from "react";

export default function Componente1({currentSum,valoringresado}) {
  return (
    <div className="diseño" >
    <div>
        <label>Total</label>
    <input type="text" id="result" value={currentSum} />
     Suma:{valoringresado}
    </div>
  </div>

  );
}
