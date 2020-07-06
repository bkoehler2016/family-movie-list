import React from 'react';
import './App.css';
import Movies from './components/Movies';
import MovieForm from './components/addMovieForm';

function App() {
  return (
    <div className="App">
      <h1>Family Movies</h1>
      <br/>
      <Movies />
      <br/>
      <MovieForm />
    </div>
  );
}

export default App;
