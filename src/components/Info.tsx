import { InfoProps } from "../App";

function Info ({info, showInfo}: InfoProps){
    if (!showInfo || !info) {
        return null;
    }

    if (info.types[1]) {
        return (
            <div className="info">
                <div className="info-left">
                    <div className="info-left-top">
                        <h2>{info.name}</h2>
                        <p>#{info.id}</p>
                    </div>
                    <div className="info-left-bottom">
                        <div>
                            <p>{info.types[0].type.name}</p>
                            <p>{info.types[1].type.name}</p>
                        </div>
                        <img src={info.sprites.other["official-artwork"].front_default}></img>
                    </div>
                </div>
                <div className="info-right">
                    
                </div>
            </div>
        )
    }

    return (
        <div className="info">
            <div className="info-left">
                <div className="info-left-top">
                    <h2>{info.name}</h2>
                    <p>#{info.id}</p>
                </div>
                <div className="info-left-bottom">
                    <div>
                        <p>{info.types[0].type.name}</p>
                    </div>
                    <img src={info.sprites.other["official-artwork"].front_default}></img>
                </div>
            </div>
        </div>
    )
}

export default Info