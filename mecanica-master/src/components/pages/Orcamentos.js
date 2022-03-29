import React, { useEffect, useState } from "react";
import axios from "axios";

import "./Orcamentos.css";
import TableOrcamento from "../TableOrcamento";

import paliao from "../images/paliao.jpg";
import { Button } from "@material-ui/core";

const Orcamentos = () => {
  const [search, setSearch] = useState();
  const [cliente, setCliente] = useState({
    placa: undefined,
    carro: undefined,
    mecanico: undefined,
    peca: [],
    valor: [],
    previsao: undefined,
    obs: [],
  });

  // useEffect(() => {
  //   const fetchAgenda = async () => {
  //     const response = await axios.get(
  //       `http://localhost:3000/orcamento/SDC-2398`
  //     );
  //     setCliente({
  //       carro: response.data[0].idCarro.carro,
  //       placa: response.data[0].idCarro.placa,
  //       mecanico: response.data[0].idMecanico,
  //       peca: response.data.map((pec) => pec.idPeca),
  //       valor: response.data.map((val) => val.valorConserto),
  //       previsao: response.data[0].previsaoConserto,
  //       obs: response.data.map((obser) => obser.obsConserto),
  //     });

  //     console.log(cliente);
  //   };
  //   fetchAgenda();
  // }, [search]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (e.target.elements.placa.value) {
      setSearch(e.target.elements.placa.value);

      e.target.elements.placa.value = "";
    }
  };

  return <>{OrcamentoExiste(search, handleSubmit, cliente)}</>;
};

function OrcamentoExiste(search, handleSubmit, cliente) {
  if (!search) {
    return (
      <div>
        <h1 name="pesquisar">DIGITE A PLACA DO CARRO QUE DESEJA BUSCAR</h1>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="ABC-1234" name="placa"></input>
          <br />
          <Button type="submit" variant="contained">
            Procurar
          </Button>
        </form>
      </div>
    );
  } else {
    return (
      <>
        <div className="container-a">
          <img src={paliao} alt="Palio" className="orcamento-car" />
          <div className="info-container">
            <h1 className="v-name">{cliente.carro}</h1>
            <table>
              <tr>
                <td>Placa: {cliente.placa}</td>
                <td>Ano: 2009</td>
              </tr>
              <tr>
                <td>Cor: prata</td>
                <td>Mecanico: {cliente.mecanico}</td>
              </tr>
            </table>
          </div>
        </div>
        <div className="orcamento-container">
          <TableOrcamento />
        </div>
      </>
    );
  }
}

export default Orcamentos;
