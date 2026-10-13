

const SearchBar=({search , setSearch})=>{
    return(<>
    <input  type="text" 
            className="search-bar"
            placeholder="Search Product..." 
            value={search} 
            onChange={(e)=>{
                 setSearch(e.target.value)
            }}>
    </input>
   
    </>)
}
export default SearchBar;