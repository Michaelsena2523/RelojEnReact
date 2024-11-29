import { useState, useEffect } from "react";

function RelojTiempo() {
  const [RelojTime, setRelojTime] = useState("0:0:0");

  function reloj() {
    const RelojDate = new Date();
    let hora = RelojDate.getHours();
    let minuto = RelojDate.getMinutes();
    let segundo = RelojDate.getSeconds();

    let Time = `${hora.toString().padStart(2, "0")}:${minuto
      .toString()
      .padStart(2, "0")}:${segundo.toString().padStart(2, "0")}`;

    setRelojTime(Time);
  }

  useEffect(() => {
    setTimeout(() => {
      reloj();
    }, 1000);
  });

  return (
    <>
      <div className="contenedor_reloj">
        <img src="" alt=""  className="imgRimgeact"/>
        <h2>Reloj michael tiempo real</h2>
        <div className="pantalla_reloj">{RelojTime}</div>
      </div>
    </>
  );
}

/* exportando funcion a archivo men */
export default RelojTiempo;
