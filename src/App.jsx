import { useState } from 'react';
import Input from "./components/Input";
import Card from "./components/Card";
import { useFetch } from "./hooks/useFetch";
import CircularProgress from "@mui/material/CircularProgress";
import Alert from "@mui/material/Alert";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import "./App.css";

function App() {

  const [nombrePokemon, setNombrePokemon] = useState("");


  const { data, loading, error, buscarPokemon } = useFetch();

  function handleBuscar() {
    buscarPokemon(nombrePokemon);
  }

  return (

  <div className="BuscadorPokemon">
    <Container maxWidth="sm">

      <h1>Buscador Pokemon</h1>

      <Stack spacing={2}>

        <Input
          valor={nombrePokemon}
          setValor={setNombrePokemon}
          onBuscar={handleBuscar}
        />

        {loading && (
          <div className="centrado">
            <CircularProgress />
          </div>
        )}

        {error && (
          <Alert severity="error">
            {error}
          </Alert>
        )}

        {data && (
          <Card pokemon={data} />
        )}

      </Stack>

    </Container>
  </div>
);
}

export default App
