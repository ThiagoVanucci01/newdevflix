import { useEffect, useState } from "react";
import devFlix from "/favicon.png";
import styles from "./MovieDescription.module.css";

const MovieDescription = (props) => {
  const [movieDesc, setMovieDesc] = useState([]);

  useEffect(() => {
    fetch(`${props.apiUrl}&i=${props.movieID}`)
      .then((response) => response.json())
      .then((data) => setMovieDesc(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className={styles.modalBackdrop} onClick={props.click}>
      <div className={styles.movieModal} onClick={(e) => e.stopPropagation()}>
        <div class="movieInfo bg-dark position-relative rounded-3">
          <div className="divImg ">
            <img
              className={styles.imagemTopo}
              src={movieDesc.Poster}
              alt={`Imagem da capa do filme ${movieDesc.Title}`}
            />
          </div>
          <button
            class="btnClose position-absolute top-0 end-0 m-3 rounded-circle bg-dark text-white border-0"
            aria-label="Fechar"
            onClick={props.click}
          >
            <span aria-hidden="true">&times;</span>
          </button>
          <div className={styles.movieType}>
            <div>
              <img src={devFlix} alt="" />
              {movieDesc.Type}
              <h1>{movieDesc.Title}</h1>
              <a
                href={`https://google.com/search?q=${encodeURIComponent(
                  movieDesc.Title
                )}`}
                target="_blank"
              >
                ▶️ Assistir
              </a>
            </div>
          </div>
        </div>
        <div className={styles.containerMisc}>
          <div className={styles.containerFlex}>
            Avaliação: {movieDesc.imdbRating} | Duração: {movieDesc.Runtime} |{" "}
            {movieDesc.Released}
          </div>
          <div className={styles.containerFlex}>
            <p>Elenco: {movieDesc.Actors}</p>
            <p>Gênero: {movieDesc.Genre}</p>
          </div>
        </div>
        <div className={styles.desc}>
          <p>Sinopse: {movieDesc.Plot}</p>
        </div>
      </div>
    </div>
  );
};

export default MovieDescription;
