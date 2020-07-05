import React, { Component } from "react";
import { Container, Row, Col} from "reactstrap";
import axios from "axios";

class Movies extends Component{
    constructor() {
        super();
        this.state ={
            movies: []
        }
    }

    componentDidMount(){
        axios.get('https://family-movie-list1.herokuapp.com/api/movies').then(res => {
            const movies = res.data;
            this.setState({movies})
        });
    }
    render() {
        return (
          <Container>
            <Row>
              {this.state.movies.map(movie => (
                <Col xs="6" key={movie.id}>
                  <Row>Title: {movie.title}</Row>
                  <Row>Release Year: {movie.release_year}</Row>
                  <Row>Rating: {movie.rating}</Row>
                  <Row>Owner: {movie.owner}</Row>
                  <Row>Format: {movie.format}</Row>
                </Col>
              ))}
            </Row>
          </Container>
        );
      }
    }
export default Movies