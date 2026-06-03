function Input({ valor, setValor, onBuscar }) {

  return (
    <div>

      <input
        type="text"
        placeholder="Ingrese un Pokémon"
        value={valor}
        onChange={(e) => setValor(e.target.value)}
      />

      <button onClick={onBuscar}>
        Buscar
      </button>

    </div>
  );
}

export default Input;