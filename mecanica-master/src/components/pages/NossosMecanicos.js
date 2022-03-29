import React from "react";

import "./NossosMecanicos.css";
import paulao from "../images/mecanico2.png";
import tuco from "../images/mecanico.png";

const NossosMecanicos = () => {
  return (
    <div className="mec">
      <div className="mecanicos-container">
        <h3 className="nome-mec">Mecânico 1</h3>
        <img src={paulao} alt="paulao" className="img-mec" />
      </div>
        <div className="mecanicos-container">
            <h3 className="nome-mec">Mecânico 2</h3>
            <img src={tuco} alt="paulao" className="img-mec" />
        </div>
    </div>
  );
};

export default NossosMecanicos;
