import React from "react";

import Card from "react-bootstrap/Card";
import ReactStars from "react-rating-stars-component";
import "./Style.css";
import { Link } from "react-router-dom";
const MovieCard = ({ movie, index }) => {
  return (
    <div key={index}>
      <Card
        style={{
          width: "18rem",
          height: "500px",
          marginBottom: "50px",
          marginTop: "50PX",
        }}
        className="movie-card"
      >
        <Card.Img
          style={{ height: "200px" }}
          variant="top"
          src={movie.posterUrl}
        />
        <Card.Body>
          <Card.Title>
            <Link to={`/movie-details/${movie.id}`}>{movie.title}</Link>
          </Card.Title>
          <Card.Text>{movie.description}</Card.Text>
          <ReactStars
            count={5}
            size={24}
            edit={false}
            value={movie.rating}
            activeColor="#ffd700"
          />
        </Card.Body>
      </Card>
    </div>
  );
};

export default MovieCard;
