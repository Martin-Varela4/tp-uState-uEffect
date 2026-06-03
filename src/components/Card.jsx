function Card({ pokemon }) {

  return (

    <div>

      <img
        src={pokemon.sprites.front_default}
        alt={pokemon.name}
      />

      <h2>{pokemon.name}</h2>

      <p>Peso: {pokemon.weight}</p>

      <p>Altura: {pokemon.height}</p>

    </div>

  );
}

export default Card;