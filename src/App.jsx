import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import Logo from "./assets/devflix.png";
import Lupa from "./assets/search.svg";
import { useEffect, useState } from "react";
import Footer from "./components/footer/footer";
import MovieCard from "./components/movieCard/MovieCard";
import NavBar from "./components/navBar/NavBar";
import SocialLinks from "./components/socialLinks/SocialLinks";
import "./App.css";
import "./scss/styles.scss"

const App = () => {
  const [search, setSearch] = useState("");
  const [movies, setMovies] = useState([]);

  const mudaTema = () => {
    const tema = window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
    document.documentElement.setAttribute("data-bs-theme", tema);
  };
  mudaTema();

  // Listen for changes in the color scheme
  window
    .matchMedia("(prefers-color-scheme: dark)")
    .addEventListener("change", mudaTema);

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
    <div class="">
      <nav
        class="navbar bg-secondary border-bottom border-body"
        data-bs-theme="dark"
      >
        <div></div>
        <div className="divLogo">
          <img width="175" height="50" class="m-2" src={Logo} alt="" />
        </div>

        
        <div class="divPesquisa ">
          <div class="search-bar ">
            <div class="input-group ">
              <input
                onKeyDown={handleKeyPress}
                onChange={(e) => setSearch(e.target.value)}
                type="text"
                class="form-control"
                placeholder="Search..."
                aria-label="Search"
                aria-describedby="search-addon"
              />
              <button
                class="btn btn-outline-secondary bg-black"
                type="button"
                id="search-addon"
              >
                <i class="fas fa-search"></i>
              </button>
            </div>
          </div>
        </div>

        <div className="divMenu">
          <button
            class="navbar-toggler "
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
        </div>
      </nav>

      {movies?.length > 0 ? (
        <div class="container d-flex justify-content-center align-items-center flex-wrap mt-3 w-100">
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
      <div id="socialLinks">
        <SocialLinks
          link={"https://github.com/ThiagoVanucci01"}
          icon={"logo-github"}
        />
        <SocialLinks
          link={"https://www.instagram.com/thiago_vanucc1/"}
          icon={"logo-instagram"}
        />
      </div>
    </div>
  );
};

export default App;
