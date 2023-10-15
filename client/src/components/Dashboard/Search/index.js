import React from 'react'
import './styles.css'
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
function Search({search , setSearch,flag ,setFlag}) {
    //search is global variable daclared in dashboard page
  return (
    <div className='search-container'>
      <div className='search-flex'>
        <SearchRoundedIcon/>
      <input placeholder='Search' type='text'
      value={search}
      onChange={(e)=>setSearch(e.target.value)}/>
    </div>
    <div className='add-user' onClick={()=>setFlag(!flag)}>
      Add User
    </div>
    </div>
  )
}

export default Search;