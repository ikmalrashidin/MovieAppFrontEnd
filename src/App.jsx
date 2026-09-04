import { useState } from "react"


function Search({onSearch}){
  const [search, setSearch] = useState('');

  function handleSubmit(e){
    e.preventDefault();
    if (search.trim() && onSearch){
      onSearch(search);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>

        <input type="text" 
        placeholder="Search for a movie..." 
        value={search} 
        onChange={e => setSearch(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
    </>
  )
}

export default function App(){

  function handleSearch(query){
    console.log("Searching for:", query)
  }

  return (
    <div>
      <Search onSearch={handleSearch}/>
    </div>
  )
}