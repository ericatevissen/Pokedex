import { useNavigate, useParams } from "react-router-dom";
import { InfoProps } from "../App";
import closeButton from "../public/close-circle.svg";

function Info ({ info, handleInfo }: InfoProps) {
    const navigate = useNavigate();
    const { name } = useParams();

    if (name) {
        handleInfo(name);
        document.title = `Pokedex/${name}`;
    }

    if (!info) {
        return null;
    }

    return (
        <div className="info">
            <div className="info-main">
                <div className="info-main-top">
                    <h2>{info.name}</h2>
                    <p>#{info.id}</p>
                </div>
                <div className="info-main-bottom">
                    {info.types[1] ? (
                        <div>
                            <p>{info.types[0].type.name}</p>
                            <p>{info.types[1].type.name}</p>
                        </div>
                    ) : (
                        <div>
                            <p>{info.types[0].type.name}</p>
                        </div>
                    )
                    }
                    <img src={info.id === 1013 ? "https://www.serebii.net/pokemon/art/1013.png" 
                    : info.sprites.other["official-artwork"].front_default}/>
                </div>
            </div>
            <div className="info-stats">
                <h2>Stats</h2>
                <p>Height: {info.height/10} m</p>
                <p>Weight: {info.weight/10} kg</p>
                <p>HP: {info.stats[0].base_stat}</p>
                <p>Attack: {info.stats[1].base_stat}</p>
                <p>Defense: {info.stats[2].base_stat}</p>
                <p>Special attack: {info.stats[3].base_stat}</p>
                <p>Special defense: {info.stats[4].base_stat}</p>
                <p>Speed: {info.stats[5].base_stat}</p>
            </div>
            <button><img src={closeButton} onClick={() => navigate("/Pokedex/")}/></button>
        </div>
    );
}

export default Info;