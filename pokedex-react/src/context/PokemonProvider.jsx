import { useEffect, useState } from "react";
import { PokemonContext } from "./PokemonContext";
import { useForm } from "../hook/useForm";

export const PokemonProvider = ({ children }) => {
  const [allPokemons, setAllPokemons] = useState([]);
  const [globalPokemons, setGlobalPokemons] = useState([]);
  const [offset, setOffset] = useState(0);

  // custom hook useForm
  const { valueSearch, onInputChange, onResetForm } = useForm({
    valueSearch: "",
  });

  const [loading, setLoading] = useState(true);
  const [active, setActive] = useState(false);

  // calling 50 pokemons from Pokeapi
  const getAllPokemons = async (limit = 50) => {
    const baseURL = "https://pokeapi.co/api/v2/";

    const res = await fetch(
      `${baseURL}pokemon?limit=${limit}&offset=${offset}`
    );
    const data = await res.json();

    const promises = data.results.map(async (pokemon) => {
      const res = await fetch(pokemon.url);
      const data = await res.json();
      return data;
    });
    const results = await Promise.all(promises);

    // for the button you press that loads 50 more pokemons, so that it doesnt load the same 50
    setAllPokemons([...allPokemons, ...results]);
    setLoading(false);
  };

  // calling all the pokemons!!
  const getGlobalPokemons = async () => {
    const baseURL = "https://pokeapi.co/api/v2/";

    const res = await fetch(`${baseURL}pokemon?limit=100000&offset=0`);
    const data = await res.json();

    const promises = data.results.map(async (pokemon) => {
      const res = await fetch(pokemon.url);
      const data = await res.json();
      return data;
    });
    const results = await Promise.all(promises);

    setGlobalPokemons(results);
    setLoading(false);
  };

  // calling pokemon by their ID
  const getPokemonByID = async (id) => {
    const baseURL = "https://pokeapi.co/api.v2/";
    const res = await fetch(`${baseURL}pokemon/${id}`);
    const data = await res.json();

    return data;
  };

  useEffect(() => {
    getAllPokemons();
  }, []);

  useEffect(() => {
    getGlobalPokemons();
  }, []);

  return (
    <PokemonContext.Provider
      value={{
        valueSearch,
        onInputChange,
        onResetForm,
        allPokemons,
        globalPokemons,
        getPokemonByID,
      }}
    >
      {children}
    </PokemonContext.Provider>
  );
};
