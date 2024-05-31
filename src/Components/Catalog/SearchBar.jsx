import './SearchBar.css'
import {useState} from'react';

// export default function SearchBar (props) {
// const [search,setSearch]= useState("");

// const handleSubmit = (event) =>{
// event.preventDefault();
// props.search(search);

  
//   const item = event.target.parentElement;
//     item.className="close-slide";
//     setTimeout(function(){
//       item.remove();
//     },100);
  
// }
// return(
//   <div class="search-bar">
//   <form className="search-form">
//   <input className="search-input" type="text" placeholder="Search" name="search" onChange={(e)=>
//     {setSearch(e.target.value);}}>
    
//     </input>
     
//     <button className="search-submit" type="submit" onClick= {handleSubmit}>Submit</button>
//   </form> 
//     </div>
// )
// }
export default function SearchBar(props) {
  const [search, setSearch] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    props.search(search);
    clearSearchInput();
  }

  const clearSearchInput = () => {
    setSearch("");
  }

  const handleInputChange = (event) => {
    setSearch(event.target.value);
  }
   const handleRefresh = () => {
  setSearch(""); // Reset search to empty string
    props.search(""); // Call search function with an empty string to display all books
  }
  return (
    <div className="search-bar">
      <form className="search-form" onSubmit={handleSubmit}>
        <input 
          className="search-input" 
          type="text" 
          placeholder="Search" 
          name="search" 
          value={search} 
          onChange={handleInputChange}
        />
         <button className="refresh-button" onClick={handleRefresh}>x</button> 
        <button className="search-submit" type="submit">Submit</button>
        
      </form>
    </div>
  );
}