import { GridProps } from "../App";

function Grid({ pokemonList, search, type }: GridProps) {
    return (
        <div className="grid"> 
            {pokemonList.map(pokemon => {
                if (pokemon.name.includes(search) && 
                (type === pokemon.types[0].type.name ||  type === "all" ||
                (pokemon.types[1] && type === pokemon.types[1].type.name))
                ) {
                    return (
                        <div className="pokemon" key={pokemon.id}>
                            <p>#{pokemon.id}</p>
                            <img src={pokemon.sprites.other["official-artwork"].front_default}></img>
                            <h2>{pokemon.name}</h2>
                        </div>
                    )
                }
            })}
        </div>
    )
}

export default Grid;