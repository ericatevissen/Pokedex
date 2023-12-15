import { GridProps } from "../App";
import Pokemon from "./Pokemon";

export interface PokemonProps {
    pokemonType1: string;
    pokemonType2: string | null;
    pokemonName: string;
    pokemonId: number;
    pokemonSprite: string;
    handleInfo(id: number): void;
}

function Grid({ pokemonList, search, type, handleInfo }: GridProps) {
    return (
        <main> 
            {pokemonList.map(pokemon => {
                let show;

                if (pokemon.name.includes(search.toLowerCase()) && 
                (type === pokemon.types[0].type.name ||  type === "all" ||
                (pokemon.types[1] && type === pokemon.types[1].type.name))
                ) { 
                    show = true;
                }

                if (show && pokemon.types[1]) {
                    return (
                        <Pokemon key={pokemon.id} pokemonType1={pokemon.types[0].type.name}
                        pokemonType2={pokemon.types[1].type.name} 
                        pokemonName={pokemon.name}
                        pokemonId={pokemon.id}
                        pokemonSprite={pokemon.sprites.other["official-artwork"].front_default}
                        handleInfo={handleInfo}
                        />
                    )
                }

                if (show) {
                    return (
                        <Pokemon key={pokemon.id} pokemonType1={pokemon.types[0].type.name} 
                        pokemonType2={null} 
                        pokemonName={pokemon.name}
                        pokemonId={pokemon.id}
                        pokemonSprite={pokemon.sprites.other["official-artwork"].front_default}
                        handleInfo={handleInfo}
                        />
                    )
                }
            })}
        </main>
    )
}

export default Grid;