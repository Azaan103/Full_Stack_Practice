import { useEffect, useRef } from "react";
function SearchBar({ search, setSearch }) {

  const searchRef = useRef(null);

  useEffect(()=>{
    searchRef.current.focus();
  },[])

  return (
    <div className="search-container">
      <input
        className="search-bar"
        type="text"
        placeholder="Search games..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        ref={searchRef}
      />
    </div>
  );
}

export default SearchBar;

