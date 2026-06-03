import { useState } from "react";

export function useFetch() {

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function buscarPokemon(nombre) {

    try {

      setLoading(true);
      setError("");

      const respuesta = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${nombre.toLowerCase()}`
      );

      if (!respuesta.ok) {
        throw new Error("Pokemon no encontrado");
      }

      const datos = await respuesta.json();

      setData(datos);

    } catch (error) {

      setError(error.message);
      setData(null);

    } finally {

      setLoading(false);

    }
  }

  return {
    data,
    loading,
    error,
    buscarPokemon
  };
}