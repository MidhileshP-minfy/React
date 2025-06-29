import React from 'react'

function SearchBar({inputValue,setInputValue,onSearch}) {

    const handleKey=(e)=>{
        if(e.key==="Enter"){
            onSearch()
        }
    }


    return (
        <div className="Search-bar">
            <input type="text" placeholder="Search for a Recipe" value={inputValue}
            onChange={(e)=>setInputValue(e.target.value)} 
            onKeyDown={handleKey}/>
            <button onClick={onSearch}>Search</button>
        </div>
    )
}

export default SearchBar