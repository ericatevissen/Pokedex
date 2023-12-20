import { PokemonProps } from "./Grid"

function Pokemon({pokemonType1, pokemonType2, pokemonName, pokemonId, pokemonSprite, handleInfo}: PokemonProps) {
    return (
        <div className="pokemon" onClick={() => handleInfo(pokemonId)}>
            <div className="top-info">
                <h2>{pokemonName}</h2>
                <p>#{pokemonId}</p>
            </div>
            <div className="bottom-info">
            {pokemonType2 ? (
                <div>
                    <p>{pokemonType1}</p>
                    <p>{pokemonType2}</p>
                </div>
            ) : (
                <div>
                    <p>{pokemonType1}</p>
                </div>
            )
            }
                <img src={pokemonId === 1013 ? "https://www.serebii.net/pokemon/art/1013.png" 
                : pokemonSprite} loading="lazy"></img>
            </div>
        </div>
    )
}

export default Pokemon;