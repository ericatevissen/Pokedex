import { GridProps } from "../App";

function Grid({ pokemonList, search, type }: GridProps) {
    return (
        <div className="grid"> 
            {pokemonList.map(pokemon => {
                let show;

                if (pokemon.name.includes(search.toLowerCase()) && 
                (type === pokemon.types[0].type.name ||  type === "all" ||
                (pokemon.types[1] && type === pokemon.types[1].type.name))
                ) { 
                    show = true;
                }

                if (show === true && pokemon.types[1]) {
                    return (
                        <div className="pokemon" key={pokemon.id}>
                            <div className="top-info">
                                <h2>{pokemon.name}</h2>
                                <p>#{pokemon.id}</p>
                            </div>
                            <div className="bottom-info">
                                <div>
                                    <p>{pokemon.types[0].type.name}</p>
                                    <p>{pokemon.types[1].type.name}</p>
                                </div>
                                <img src={pokemon.sprites.other["official-artwork"].front_default}></img>
                            </div>
                        </div>
                    )
                }
                if (show === true) {
                    return (
                        <div className="pokemon" key={pokemon.id}>
                            <div className="top-info">
                                <h2>{pokemon.name}</h2>
                                <p>#{pokemon.id}</p>
                            </div>
                            <div className="bottom-info">
                                <div>
                                    <p>{pokemon.types[0].type.name}</p>
                                </div>
                                <img src={pokemon.sprites.other["official-artwork"].front_default}></img>
                            </div>
                        </div>
                    )
                }
            })}
        </div>
    )
}

export default Grid;