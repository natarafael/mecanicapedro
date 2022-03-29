import React, { useState, useEffect } from "react";
import axios from "axios";
import { Badge } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import "date-fns";
import Grid from "@material-ui/core/Grid";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from "@material-ui/pickers";

import "./Agendar.css";

import { Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: "25ch",
  },
}));

export default function LayoutTextFields() {
  const [cliente, setCliente] = useState({
    nome: undefined,
    placa: undefined,
    modelo: undefined,
    data: undefined,
    telefone: undefined,
  });

  const [nomeCliente, setNomeCliente] = useState("");
  const [placaCliente, setPlacaCliente] = useState("");
  const [modeloCliente, setModeloCliente] = useState("");
  const [telefoneCliente, setTelefoneCliente] = useState("");
  const [selectedDate, setSelectedDate] = React.useState(
    new Date("2021-08-20T09:00:00")
  );
  const [selectedDays, setSelectedDays] = useState();

  const classes = useStyles();

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setCliente({
      nome: nomeCliente,
      placa: placaCliente,
      modelo: modeloCliente,
      telefone: telefoneCliente,
      data: selectedDate.getTime(),
    });

    console.log(cliente);

    e.target.elements.nome.value = "";
    e.target.elements.placa.value = "";
    e.target.elements.modelo.value = "";
  };

  useEffect(() => {
    const fetchAgenda = async () => {
      const response = await axios.get(`http://localhost:3000/agendar`);
      const date = new Date(response.data[0].dataAgenda);
      

      console.log(date.toDateString());

      setSelectedDays([date.getDate()]);
    };
    fetchAgenda();
  }, []);

  const handleMonthChange = async () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        setSelectedDays([1, 2, 3].map(() => getRandomNumber(1, 28)));
        resolve();
      }, 1000);
    });
  };

  return (
    <div className="agenda-container">
      <form className={classes.root} onSubmit={handleSubmit}>
        <div>
          <TextField
            required
            id="nome"
            value={nomeCliente}
            onChange={(e) => setNomeCliente(e.target.value)}
            label="Nome completo"
            style={{ margin: 8 }}
            placeholder="seu nome aqui"
            fullWidth
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
              label="Telefone do Cliente"
              id="telefone"
              value={telefoneCliente}
              onChange={(e) => setTelefoneCliente(e.target.value)}
              className={classes.textField}
              helperText="ex.: (45)__________"
          />
          <TextField
            label="Placa do carro"
            id="placa"
            required
            value={placaCliente}
            onChange={(e) => setPlacaCliente(e.target.value)}
            className={classes.textField}
            helperText="ex.: ABC-1234"
          />

          <TextField
            required
            label="Modelo do carro"
            id="modelo"
            value={modeloCliente}
            onChange={(e) => setModeloCliente(e.target.value)}
            className={classes.textField}
            helperText="ex.: Fiesta"
          />
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <Grid container justify="space-around">
              <KeyboardDatePicker
                required
                margin="normal"
                id="date-picker-dialog"
                label="Escolher data"
                format="dd/MM/yyyy"
                value={selectedDate}
                onChange={handleDateChange}
                onMonthChange={handleMonthChange}
                renderDay={(
                  day,
                  selectedDate,
                  isInCurrentMonth,
                  dayComponent
                ) => {
                  const isSelected =
                    isInCurrentMonth && selectedDays.includes(day.getDate());

                  // You can also use our internal <Day /> component
                  return (
                    <Badge badgeContent={isSelected ? "🌚" : undefined}>
                      {/* 🛑 */}
                      {dayComponent}
                    </Badge>
                  );
                }}
                KeyboardButtonProps={{
                  "aria-label": "change date",
                }}
              />
              <KeyboardTimePicker
                required
                margin="normal"
                id="time-picker"
                label="Escolher horário"
                value={selectedDate}
                onChange={handleDateChange}
                KeyboardButtonProps={{
                  "aria-label": "change time",
                }}
              />
            </Grid>
          </MuiPickersUtilsProvider>
        </div>
        <div className="botao">
          <Button type="submit" variant="contained">
            Agendar
          </Button>
        </div>
      </form>
    </div>
  );
}

function getRandomNumber(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}
