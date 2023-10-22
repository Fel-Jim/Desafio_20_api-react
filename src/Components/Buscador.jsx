import React, { useState, useEffect } from "react";
import axios from "axios";

function Buscador() {
  const [digimonList, setDigimonList] = useState([]);

  useEffect(() => {
    axios
      .get("https://digimon-api.vercel.app/api/digimon")
      .then((response) => {
        setDigimonList(response.data);
      })
      .catch((error) => {
        console.error("Error en busqueda", error);
      });
  }, []);

  return (
    <div className="container border border-dark rounded border-2 w-50 h-50">
      <div className="listBox d-grid justify-content-center mw-50 mh-10">
        <div className="titleBox">
          <h1>Lista de Digimon</h1>
        </div>
        <div className="listName">
          <ul>
            {digimonList.map((digimon) => (
              <li key={digimon.name}>{digimon.name}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Buscador;
