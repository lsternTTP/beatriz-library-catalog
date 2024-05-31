import "./App.css";
import AllBooks from "./Components/Catalog/AllBooks.jsx";
import AllRequests from "./Components/Requests/AllRequests.jsx";
import database from "../BookData.json";

import SearchBar from "./Components/Catalog/SearchBar.jsx";
import {useState} from 'react';
export default function App() {
  // initialize request list state
  const [myRequests, setMyRequests] = useState([]);
  console.log("requests", myRequests);

  // initalize book list state
  const [myBooks, setMyBooks] = useState(database.catalog);
  console.log("books list", myBooks);
  
   const [mySearch, setmySearch]= useState([]);
  console.log("search", mySearch);
 
function filterBooksHandler (query){
  if (query === ""){
    setMyBooks(database.catalog);
    } else {
    setmySearch(myBooks);
  }
  setMyBooks( ()=> {
    return myBooks.filter((thisBook)=>
      thisBook.title.toLowerCase()==query.toLowerCase());
  });
 }
  // if (query.trim() === "" && authorQuery.trim() === "") {
  //   // If both query and authorQuery are empty, reset book list to display all books
  //   setMyBooks(database.catalog);
  // } else {
  //   // Otherwise, filter books based on the provided query and authorQuery
  //   setMyBooks(() => {
  //     return myBooks.filter((thisBook) => 
  //       thisBook.title.toLowerCase().includes(query.toLowerCase()) &&
  //       thisBook.author.toLowerCase().includes(authorQuery.toLowerCase())




  
  // function filterBooksHandler(query, authorQuery) {
  //   setMyBooks(() => {
  //     return myBooks.filter((thisBook) => 
  //       thisBook.title.toLowerCase().includes(query.toLowerCase())
  //    &&
  //       thisBook.author.toLowerCase().includes(authorQuery.toLowerCase())
  //                           );
  //                             });
  //                           }
  
  function refreshBooksHandler() {
    setMyBooks(database.catalog); // Reset book list to display all books
  }

               
  
  function addToRequestListHandler(bookToAdd) {
    setMyRequests( () => {
      return [...myRequests, bookToAdd];
     });
  }
     
        function removeFromRequestListHandler(bookToRemove) {
         setMyRequests(() => {
           return myRequests.filter((requestToRemovebook) => requestToRemovebook.id !== bookToRemove.id);
         });
       
      }
    

   
  
  return (
    <main>
      <div className="container">
     
     
   
      <nav>
         <h1>Library Catalog</h1>
        <ul>
          <li>Home</li>

          <li>Account</li>
        </ul>
         <SearchBar search= {filterBooksHandler}
            refresh={refreshBooksHandler} // Pass refresh function to SearchBar
           ></SearchBar> 
       
      </nav>

      <section id='books-and-requests'>
        
      <AllBooks bookList={myBooks} addToRequestListHandler={addToRequestListHandler}></AllBooks>
      <AllRequests requestList={myRequests}
        removeFromRequestListHandler={removeFromRequestListHandler}></AllRequests>
         
        </section>
      </div>  
    </main>
  );
}
