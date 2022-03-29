import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Checkbox from "@material-ui/core/Checkbox";
import { Button } from "@material-ui/core";

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

function createRow(desc, qty, val) {
  return { desc, qty, val };
}

export default function SpanningTable() {
  const classes = useStyles();
  const [aceitar, setAceitar] = useState(false);
  const [pecas, setPecas] = useState([
    {
      nome: "Bateria",
      valor: 150,
      aceita: true,
    },
    {
      nome: "Oleo",
      valor: 85,
    },
    {
      nome: "Pneus",
      valor: 120,
    },
  ]);

  const rows = [];

  pecas.map((peca, index) => {
    rows.push(createRow(peca.nome, "1", peca.valor));
  });

  return (
    <div>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="spanning table">
          <TableHead>
            <TableRow>
              <TableCell align="center" colSpan={4}>
                ORÇAMENTO
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Peça</TableCell>
              <TableCell align="right">Qnt</TableCell>
              <TableCell align="right">Valor R$</TableCell>
              <TableCell align="right">Aceitar</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.desc}>
                <TableCell>{row.desc}</TableCell>
                <TableCell align="right">{row.qty}</TableCell>
                <TableCell align="right">{row.val}</TableCell>
                <TableCell align="right">
                  <Checkbox
                    checked={pecas.aceita}
                    onClick={() => {
                      console.log(pecas.aceita);
                    }}
                  />
                </TableCell>
              </TableRow>
            ))}
            <TableRow>
              <TableCell rowSpan={5} />
              <TableCell colSpan={2}>Subtotal</TableCell>
              <TableCell align="right">R$: {subtotal(rows)}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell colSpan={2}>Tempo estimado</TableCell>
              <TableCell align="right">26 dias</TableCell>
            </TableRow>
            <TableRow>
              <TableCell colSpan={2}>Mão de obra</TableCell>
              <TableCell align="right">R$: 200</TableCell>
            </TableRow>
            <TableRow>
              <TableCell colSpan={2}>Total</TableCell>
              <TableCell align="right">R$: {subtotal(rows) + 200}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell colSpan={3} align="right">
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => {
                    setAceitar(!aceitar);
                  }}
                >
                  Aceitar orcamento
                </Button>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

function subtotal(rows) {
  let sub = 0;
  rows.map((row) => (sub = sub + row.val));
  return sub;
}
