import axios from "axios";

export default  {
  findAllBooks : function(query){
    return axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query}&key=AIzaSyBukguQDxNgFqfdUmpsP7V785dfnl1ZioQ`)
    .then ((data) => {
      console.log(data.data.items)
    })
  }
}

