import { PokemonProps } from "./Grid"

function Pokemon({pokemonType1, pokemonType2, pokemonName, pokemonId, pokemonSprite}: PokemonProps) {
    if (pokemonType2) {
        return (
            <div className="pokemon">
                <div className="top-info">
                    <h2>{pokemonName}</h2>
                    <p>{pokemonId}</p>
                </div>
                <div className="bottom-info">
                    <div>
                        <p>{pokemonType1}</p>
                        <p>{pokemonType2}</p>
                    </div>
                    <img src={pokemonSprite}></img>
                </div>
            </div>
        )
    }
    return (
        <div className="pokemon">
                <div className="top-info">
                    <h2>{pokemonName}</h2>
                    <p>{pokemonId}</p>
                </div>
                <div className="bottom-info">
                    <div>
                        <p>{pokemonType1}</p>
                    </div>
                    <img src={pokemonSprite}></img>
                </div>
        </div>
    )
}

export default Pokemon;