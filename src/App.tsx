import { useEffect, useState } from 'react';
import './App.css';
import Grid from './components/Grid';
import SearchBar from './components/SearchBar';
import TypeSelect from './components/TypeSelect';

interface Pokemon {
  name: string;
  id: number;
  url: string;
  sprites: Sprites;
  types: Types
}

interface Types {
  0: firstType;
  1: secondType;
}

interface firstType {
  type: Type
}

interface secondType {
  type: Type
}

interface Type {
  name: string;
}

interface OfficialArtwork {
  front_default: string;
}

interface OtherSprites {
  "official-artwork": OfficialArtwork;
}

interface Sprites {
  other: OtherSprites;
}

export interface GridProps {
  pokemonList: Pokemon[];
  search: string;
  type: string;
}

function App() {
  const [pokemonList, setPokemonList] = useState<Array<Pokemon>>([]);
  const [search, setSearch] = useState("");
  const [type, setType] = useState("all");

  useEffect(() => {
    async function fetchPokemon() {
      const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151");
      const data = await response.json();
  
      const pokemonDetails = await Promise.all(data.results.map(async (pokemon: Pokemon) => {
        const response = await fetch(pokemon.url);
        const data = await response.json();
        return data;
      }));

      setPokemonList(pokemonDetails);
    }

    fetchPokemon().catch(error => console.error("Error fetching Pokemon:", error));
  }, [])

  return (
    <>
      <h1>Pokedex</h1>
      <div>
        <TypeSelect setType={setType}/>
        <SearchBar setSearch={setSearch}/>
      </div>
      <Grid pokemonList={pokemonList} search={search} type={type}/>
    </>
  )
}

export default App