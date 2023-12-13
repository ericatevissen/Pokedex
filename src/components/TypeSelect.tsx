function TypeSelect( {setType}: { setType: React.Dispatch<React.SetStateAction<string>>}) {
    return (
        <select name="type" id="type" onChange={(e) => setType(e.target.value)}>
            <option value="all">All</option>
            <option value="bug">Bug</option>
            <option value="electric">Electric</option>
            <option value="fighting">Fighting</option>
            <option value="fire">Fire</option>
            <option value="ghost">Ghost</option>
            <option value="grass">Grass</option>
            <option value="ground">Ground</option>
            <option value="ice">Ice</option>
            <option value="normal">Normal</option>
            <option value="poison">Poison</option>
            <option value="psychic">Psychic</option>
            <option value="water">Water</option>
        </select>
    )
}

export default TypeSelect