import React, { Component } from "react";
import { Table } from "reactstrap";
import axios from "axios";
import '../App.css';

class Movies extends Component{
    constructor() {
        super();
        this.state ={
            movies: []
        }
    }

    componentDidMount(){
        axios.get('https://bkoehler2016-family-movielist-backend.glitch.me/api/movies').then(res => {
            const movies = res.data;
            this.setState({movies})
        });
    }
    render() {
        return (
          <Table bordered>
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Release year</th>
                    <th>Rating</th>
                    <th>Owner</th>
                    <th>Format</th>
                </tr>
                </thead>
              {this.state.movies.map(movie => (
                <tbody  key={movie.id}>
                    <tr>
                        <td>{movie.title}</td>
                      
                     
                        <td>{movie.releaseYear}</td>
                      
                     
                        <td>{movie.rating}</td>
                        
                        <td>{movie.owner}</td>
                       
                        <td>{movie.format}</td>
                        </tr>
                </tbody>
              ))}
            </Table>
        );
      }
    }
export default Movies