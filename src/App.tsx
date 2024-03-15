import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
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

interface Data {
    results: ResultsPokemon[]
}

interface ResultsPokemon {
    name: string;
    url: string;
}

interface Types {
    [index: number]: Type;
}

interface Type {
    type: TypeName;
}

interface TypeName {
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
    base_stat: number;
}

export interface GridProps {
    pokemonList: Pokemon[];
    search: string;
    type: string;
}

export interface InfoProps {
    info: Pokemon | null;
    handleInfo(id: string): void;
}

function App() {
    const [pokemonList, setPokemonList] = useState<Array<Pokemon>>([]);
    const [search, setSearch] = useState("");
    const [type, setType] = useState("all");
    const [info, setInfo] = useState<Pokemon | null>(null);
    const [loading, setLoading] = useState(true);

    function handleInfo(name: string) {
        pokemonList.forEach(pokemon => {
            if (name === pokemon.name) {
                setInfo(pokemon);
            }
        });
    }

    useEffect(() => {
        async function fetchPokemon() {
            try {
                const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=1017");
                const data = await response.json() as Data;
                const dataResults = data.results;
                const pokemonDetails = await Promise.all(
                    dataResults.map(async (pokemon) => {
                        const response = await fetch(pokemon.url);
                        const pokemonData = await response.json() as Pokemon;
                        return pokemonData;
                    }
                ));
    
                setPokemonList(pokemonDetails);
            } catch (error) {
                console.error("Error fetching pokemon", error);
            }
        }

        fetchPokemon()
            .then(() => {
                setLoading(false);
            })
            .catch((error) => console.error("Error setting loading state", error));
    }, []);
    
    if (loading) {
        return (
            <h1 className="loading">Loading...</h1>
        );
    }

    return (
        <>
            <h1>Pokedex</h1>
            <nav>
                <TypeSelect setType={setType}/>
                <SearchBar setSearch={setSearch}/>
            </nav>
            <Grid pokemonList={pokemonList} search={search} type={type}/>
            <Routes>
                <Route path="/:name" element={<Info info={info} handleInfo={handleInfo}/>}/>
            </Routes>
        </>
    );
}

export default App;