import './Book.css';

export default function Book(props) {
  // handle add request button click
  function clickRequestHandler() {
    props.liftBookToAppHandler(props.book);
  }
  
  return (
    <div className="book-card">
      <img className="book-cover" src={props.book.img}></img>
      <h2 className="book-title">{props.book.title}</h2>
      <h3 className="book-author">{props.book.author}</h3>
      <p>Published {props.book.yearPublished} in {props.book.language}</p>
      <p>{props.book.description}</p>
      <button id="request-button" onClick={clickRequestHandler}>Request Book</button>
    </div>
  )
}