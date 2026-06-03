import { useState } from 'react';
import Input from "./components/Input";
import Card from "./components/Card";
import { useFetch } from "./hooks/useFetch";


function App() {

  const [nombrePokemon, setNombrePokemon] = useState("");


  const { data, loading, error, buscarPokemon } = useFetch();

  function handleBuscar() {
    buscarPokemon(nombrePokemon);
  }

  return (

    <div className="BuscadorPokemon"> 

      <h1>Buscador de Pokemon</h1>

      <Input
        valor= {nombrePokemon}
        setValor={setNombrePokemon}
        onBuscar= {handleBuscar}
      />

      {loading && <p>Cargando</p>}
      {error && <p>{error}</p>}
      {data && (
        <Card pokemon= {data} />
      )}
      

    </div>

  )
    
}


export default App
