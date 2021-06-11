import React, { useState } from 'react';
import axios from "axios";

import Button from "../components/Button";







function SearchBooks() {

  const [book, setBook] = useState("")
  const [result, setResult] = useState([])


  function handleInputChange(event) {
    const book = event.target.value
   
    setBook(book)
  };

  function handleFormSubmit(event) {
  event.preventDefault()

  axios.get("https://www.googleapis.com/books/v1/volumes?q=" +book+"&key=AIzaSyBukguQDxNgFqfdUmpsP7V785dfnl1ZioQ")
    .then ((data) => {
      console.log(data.data.items)
      setResult(data.data.items)
    })
  };


  return (
    <>
    <div class="container">
      <form>
        <div class="form-group">
          <input
            className="form-control mt-10"
            type="text"
            onChange={handleInputChange}
            placeholder="Search For a Book"
          />
        </div>



        <Button
          onClick={handleFormSubmit}
          type="success"
          className="input-lg"
        >
          Search
                    </Button>

      </form>
      <div className="container row justify-content-center">
      {result.map(book => (
                    <div className="card col-3 mx-2 my-2" style={{ "width": "18rem" }}>
                        
                        <div className="card-body">
                            <h4 className="card-title card-header mb-3 text-center">
                                {book.volumeInfo.title}
                            </h4>
                            <h6 className="card-subtitle">  {book.volumeInfo.authors[0]}</h6>
                            
                            <img src={book.volumeInfo.imageLinks.thumbnail} alt={book.title} />
                            <p className="card-text">{book.volumeInfo.description}</p>
                            <a href="#" className="btn btn-secondary btn-sm">{book.volumeInfo.infoLink} </a>
                        </div>
                    </div>

          
      ))}
    </div>
  </div>
  </>

  )
  };


  export default SearchBooks;

   {/* {result.map(book => (
        

        <img src={book.volumeInfo.imageLinks.thumbnail} alt={book.title} />
          {book.volumeInfo.title}
          {book.volumeInfo.authors[0]}
          {book.volumeInfo.description}
          {book.volumeInfo.infoLink} */}