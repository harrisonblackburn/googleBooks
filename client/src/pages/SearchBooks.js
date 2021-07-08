import React, { useState } from 'react';
import axios from "axios";
import {Card, CardGroup} from 'react-bootstrap';
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

<CardGroup>
<Card>
  <Card.Img variant="top" src={book.volumeInfo.imageLinks.thumbnail} />
  <Card.Body>
    <Card.Title>{book.volumeInfo.title}</Card.Title>
    <Card.Subtitle>{book.volumeInfo.authors[0]}</Card.Subtitle>
    <Card.Text>
    {book.volumeInfo.description}
    </Card.Text>
  </Card.Body>
  <Card.Footer>
    <small className="text-muted">Last updated 3 mins ago</small>
  </Card.Footer>
  <Button variant="primary">Save Book</Button>
</Card>
<Card>
  <Card.Img variant="top" src="holder.js/100px160" />
  <Card.Body>
    <Card.Title>Card title</Card.Title>
    <Card.Text>
      This card has supporting text below as a natural lead-in to additional
      content.{' '}
    </Card.Text>
  </Card.Body>
  <Card.Footer>
    <small className="text-muted">Last updated 3 mins ago</small>
  </Card.Footer>
</Card>

</CardGroup>
/* <CardGroup>
  <Card className="card col-lg-3 mx-2 my-2 border border-dark" >
  <Card.Img variant="top" src={book.volumeInfo.imageLinks.thumbnail} />
  <Card.Body>
  <Card.Title>{book.volumeInfo.title}</Card.Title>
  <Card.Subtitle>{book.volumeInfo.authors[0]}</Card.Subtitle>

  <Card.Text>
  {book.volumeInfo.description}
  </Card.Text>
  <Button variant="primary">Save Book</Button>
</Card.Body>
  </Card>
</CardGroup> */

                  

          
      ))}
    </div>
  </>
  

  )
  };


  export default SearchBooks;
