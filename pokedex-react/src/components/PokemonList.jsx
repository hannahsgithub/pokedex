import React, { useContext } from "react";
import { PokemonContext } from "../context/PokemonContext";
import { CardPokemon } from "./CardPokemon";
import { Loader } from "./Loader";

export const PokemonList = () => {
  const { allPokemons, loading, filteredPokemons } = useContext(PokemonContext);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="card-list-pokemon container">
          {filteredPokemons.length ? (
            <>
              {filteredPokemons.map((pokemon) => (
                <CardPokemon
                  pokemon={capitalizePokemonName(pokemon)}
                  key={pokemon.id}
                />
              ))}
            </>
          ) : (
            <>
              {allPokemons.map((pokemon) => (
                <CardPokemon
                  pokemon={capitalizePokemonName(pokemon)}
                  key={pokemon.id}
                />
              ))}
            </>
          )}
        </div>
      )}
    </>
  );
};

const capitalizePokemonName = (pokemon) => {
  const capitalizedName =
    pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);
  return { ...pokemon, name: capitalizedName };
};
