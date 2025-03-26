import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import Logo from "./assets/devflix.png";
import Lupa from "./assets/search.svg";
import { useEffect, useState } from "react";
import Footer from "./components/footer/footer";
import MovieCard from "./components/movieCard/MovieCard";
import NavBar from "./components/navBar/NavBar";

const App = () => {
  const [search, setSearch] = useState("");
  const [movies, setMovies] = useState([]);

  //Utilizando chave de API do arquivo .env
  //const apiKey = import.meta.env.VITE_OMDB_API_KEY;
  const apiKey = "e4d577fa";
  const apiUrl = `https://omdbapi.com/?apikey=${apiKey}`;

  //Alimentando com dados para não ficar nulo com useEffect
  useEffect(() => {
    searchMovies("Batman");
  }, []);

  //criando a conexão com a API e trazendo informações
  const searchMovies = async (title) => {
    const response = await fetch(`${apiUrl}&s=${title}`);
    const data = await response.json();

    //alimentando o movies
    setMovies(data.Search);
  };

  //e = evento | ao clicar ou digitar acontece algo
  const handleKeyPress = (e) => {
    e.key === "Enter" && searchMovies(search);
  };

  return (
    <div id="app">
      <NavBar logo={Logo}/>

      <div className="search">
        <input
          onKeyDown={handleKeyPress}
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          placeholder="Pesquise por filmes"
        />
        <img onClick={() => searchMovies(search)} src={Lupa} alt="" />
      </div>

      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie, index) => (
            <MovieCard key={index} apiUrl={apiUrl} {...movie} />
          ))}
        </div>
      ) : (
        <h2 className="empty">😢 Filme não encontrado 😢</h2>
      )}

      <Footer
        devName={" ThiagoVanucci"}
        devLink={"https://github.com/ThiagoVanucci01"}
      />
    </div>
  );
};

export default App;
