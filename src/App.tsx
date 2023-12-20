import { useEffect, useState } from 'react';
import './App.css';
import Grid from './components/Grid';
import SearchBar from './components/SearchBar';
import TypeSelect from './components/TypeSelect';
import Info from './components/Info';
import Pokemon from './components/Pokemon';

export interface Pokemon {
  name: string;
  id: number;
  url: string;
  sprites: Sprites;
  types: Types;
  height: number;
  weight: number;
  stats: Stats;
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

interface Stats {
  [index: number]: Stat;
}

interface Stat {
  base_stat: number
}

export interface GridProps {
  pokemonList: Pokemon[];
  search: string;
  type: string;
  setInfo: React.Dispatch<React.SetStateAction<Pokemon | null>>
  setShowInfo: React.Dispatch<React.SetStateAction<boolean>>
  handleInfo(id: number): void
}

export interface InfoProps {
  info: Pokemon | null;
  showInfo: boolean;
  setShowInfo: React.Dispatch<React.SetStateAction<boolean>>;
}

function App() {
  const [pokemonList, setPokemonList] = useState<Array<Pokemon>>([]);
  const [search, setSearch] = useState("");
  const [type, setType] = useState("all");
  const [showInfo, setShowInfo] = useState(false)
  const [info, setInfo] = useState<Pokemon | null>(null);
  const [loading, setLoading] = useState(true)

  function handleInfo(id: number) {
    setShowInfo(true)

    pokemonList.forEach(pokemon => {
      if (id === pokemon.id) {
        setInfo(pokemon)
      }
    });
  }

  useEffect(() => {
    async function fetchPokemon() {
      const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=1017");
      const data = await response.json();
      const pokemonDetails = await Promise.all(data.results.map(async (pokemon: Pokemon) => {
        const response = await fetch(pokemon.url);
        const data = await response.json();
        return data;
      }));

      setPokemonList(pokemonDetails)
    }

    fetchPokemon().catch(error => console.error("Error fetching Pokemon:", error));
    fetchPokemon().finally(() => setLoading(false))
  }, [])

  if (loading) {
    return (
      <h1 className="loading">Loading...</h1>
    )
  }

  return (
    <>
      <h1>Pokedex</h1>
      <nav>
        <TypeSelect setType={setType}/>
        <SearchBar setSearch={setSearch}/>
      </nav>
      <Grid pokemonList={pokemonList} search={search} type={type} 
      setShowInfo={setShowInfo} setInfo={setInfo} handleInfo={handleInfo}/>
      <Info info={info} showInfo={showInfo} setShowInfo={setShowInfo}/>
    </>
  )
}

export default App