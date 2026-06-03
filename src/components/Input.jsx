import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

function Input({ valor, setValor, onBuscar }) {
  return (
    <>
      <TextField
        label="Nombre del Pokémon"
        variant="outlined"
        value={valor}
        onChange={(e) => setValor(e.target.value)}
      />

      <Button
        variant="contained"
        onClick={onBuscar}
      >
        Buscar
      </Button>
    </>
  );
}

export default Input;