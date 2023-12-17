interface SearchBarProps {
    setSearch: React.Dispatch<React.SetStateAction<string>>
}

function SearchBar( {setSearch}: SearchBarProps) {
    return (
        <input type="text" name="search" id="search" placeholder="Search" onChange={(e) => (
            setSearch(e.target.value)
        )}/>
    )
}

export default SearchBar