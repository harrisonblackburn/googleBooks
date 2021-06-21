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
      {result.map(book => (
                     <div className="card col-lg-3 mx-2 my-2 border border-dark">
                        <h2 className="card-header fluid">{book.volumeInfo.title}</h2>
                        <h4 className="card-subtitle mb-2"> {book.volumeInfo.authors[0]}</h4>
                        <img src={book.volumeInfo.imageLinks.thumbnail} alt={book.title} className="card-img"/>
                        <p className="card-text">{book.volumeInfo.description}</p>
                        <a href="#" className="btn btn-secondary btn-sm"> </a>
                           
                      </div>

          
      ))}
    </div>
  </>
  

  )
  };


  export default SearchBooks;
