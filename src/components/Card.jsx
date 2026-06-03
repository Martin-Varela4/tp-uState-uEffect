import {
  Card,
  CardContent,
  CardMedia,
  Typography
} from "@mui/material";


function PokemonCard({ pokemon }) {
  return (
    <Card
      sx={{
        width: 300,
        mt: 3
      }}
    >

      <CardMedia
        component="img"
        image={pokemon.sprites.other["official-artwork"].front_default

        }

        alt={pokemon.name}
      />

      <CardContent>

        <Typography variant="h5">
          {pokemon.name}
        </Typography>

        <Typography>
          Peso: {pokemon.weight / 10} kg
        </Typography>

        <Typography>
          Altura: {pokemon.height / 10} m
        </Typography>

      </CardContent>

    </Card>
  );
}

export default PokemonCard;