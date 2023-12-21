import { PokemonProps } from "./Grid";
import { useNavigate } from "react-router-dom";

function Pokemon({ pokemonType1, pokemonType2, pokemonName, pokemonId, pokemonSprite }: PokemonProps) {
    const navigate = useNavigate();

    return (
        <div className="pokemon" onClick={() => { navigate(`/${pokemonName}`);}}>
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
                <img loading="lazy" src={pokemonId === 1013 ? "https://www.serebii.net/pokemon/art/1013.png" 
                    :pokemonSprite}/>
            </div>
        </div>
    );
}

export default Pokemon;