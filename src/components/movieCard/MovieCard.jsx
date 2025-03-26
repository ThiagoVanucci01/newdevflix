import { useState } from "react";
import MovieDescription from "../movieDescription/MovieDescription";
import styles from "./MovieCard.module.css";

const MovieCard = (props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      <div
        class="movie shadow rounded-3 position-relative overflow-hidden border-0 m-3"
        onClick={toggleModal}
      >
        <div className={styles.movie} onClick={toggleModal}>
          <div>
            <p>{props.Year}</p>
          </div>

          <div>
            <img src={props.Poster} alt="" />
          </div>

          <div>
            <span>{props.Type}</span>
            <h3>{props.Title}</h3>
          </div>
        </div>
        {isModalOpen && (
          <MovieDescription
            apiUrl={props.apiUrl}
            movieID={props.imdbID}
            click={toggleModal}
          />
        )}
      </div>
    </>
  );
};

export default MovieCard;
