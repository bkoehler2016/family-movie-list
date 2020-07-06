import React, { useState } from "react";
import axios from "axios";
import { Button } from "reactstrap";

export default function MovieForm() {
  const [newMovie, SetNewMovie] = useState({}); 

  const handleChange = event => {
    SetNewMovie({ ...newMovie, [event.target.name]: event.target.value });
  };

  const handleSubmit = () => {
    axios
      .post("https://family-movie-list1.herokuapp.com/api/movies", newMovie)
      .then(res => {
        console.log(res);
      });
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <input
        type="text"
        name="title"
        id="title"
        value={newMovie.title}
        placeholder="Title"
        onChange={handleChange}
      />
      <input
        type="number"
        name="release_year"
        id="release_year"
        value={newMovie.release_year}
        placeholder="Release Year"
        onChange={handleChange}
      />
       <input
        type="text"
        name="rating"
        id="rating"
        value={newMovie.rating}
        placeholder="Rating"
        onChange={handleChange}
      />
       <input
        type="text"
        name="owner"
        id="owner"
        value={newMovie.owner}
        placeholder="Owner"
        onChange={handleChange}
      />
       <input
        type="text"
        name="format"
        id="format"
        value={newMovie.format}
        placeholder="Format"
        onChange={handleChange}
      />
      <Button color="primary" type="submit">
        Add New Movie
        
      </Button>
      
    </form>
  );
}