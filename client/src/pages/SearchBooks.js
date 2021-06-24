import React, { useState } from 'react';
import axios from "axios";
import {Card} from 'react-bootstrap';
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

<Card style={{ width: '18rem' }}>
<Card.Img variant="top" src={book.volumeInfo.imageLinks.thumbnail} />
<Card.Body>
  <Card.Title>{book.volumeInfo.title}</Card.Title>
  <Card.Subtitle className="mb-2 text-muted">{book.volumeInfo.authors[0]}</Card.Subtitle>

  <Card.Text>
  {book.volumeInfo.description}
  </Card.Text>
  <Button variant="primary">Go somewhere</Button>
</Card.Body>
</Card>
                  

          
      ))}
    </div>
  </>
  

  )
  };


  export default SearchBooks;
