import './Request.css';
export default function Request(props) {
  function clickRemoveRequestHandler() {
    // call the function received from AllRequests
    props.liftRequestToRemoveHandler(props.book);
  }
  
  return (
    <div className="request-card">
      <img id="image-request-card" src={props.book.img}></img>
      <h3 id="request-title">{props.book.title}</h3>
      <p>{props.book.author}</p>
      {/* <input type="reset" id="reset-button" value="x"/>  */}
       <button id="delete-button" onClick={clickRemoveRequestHandler}>X</button> 
     
    </div>
  )
}