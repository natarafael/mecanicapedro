import React from "react";
import Container from "../Container";

import fixingcar from "../images/1.png";
import oil from "../images/unknown.png";
import pneus from "../images/pneu.png";
import balance from "../images/balanceamento.png";

import "./Home.css";

const Home = () => {
  return (
    <>
      <div className="container">
        <img className="image-home" src={fixingcar} alt="consertando carro" />
        <div className="horarios">
          <h4>HORÁRIOS DE ATENDIMENTO</h4>
            <h4>Segunda à sexta: 08:00 - 18:00</h4>
            <h4>Sabado até: 12:00</h4>
        </div>
      </div>
      <div>
        <h1>Mais Serviços</h1>
        <hr className="line" />
          <div align="center">
              <Container title={"Troca de óleo"} img={oil} />
              <Container title={"Troca de pneus"} img={pneus} />
              <Container title={"Balanceamentos"} img={balance} />
          </div>
      </div>
    </>
  );
};

export default Home;
