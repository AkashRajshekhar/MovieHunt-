import React, { useState } from "react";
import { IoMdSearch } from "react-icons/io";
import { Link } from "react-router-dom";

const Moviehunt = () => {

  const API_KEY = "e0e179fa";

  const [searchQuery, setSearchQuery] = useState("");
  const [movies, setMovies] = useState([]);

  const trendingMovies = [
    "Avengers",
    "Batman",
    "Spider-Man",
    "Harry Potter"
  ];

  const handleSearchSubmit = async (query = searchQuery) => {

    if (!query) return;

    const response = await fetch(
      `https://www.omdbapi.com/?apikey=${API_KEY}&s=${query}`
    );

    const data = await response.json();

    if (data.Search) {
      setMovies(data.Search);
    } else {
      setMovies([]);
    }

  };

  return (

    <div className="min-h-screen bg-black text-white flex flex-col items-center pt-20">

      <h1 className="text-5xl font-bold text-red-600 mb-10">
        MovieHunt
      </h1>

      <div className="flex items-center bg-zinc-900 rounded-xl overflow-hidden w-[90%] max-w-xl">

        <input
          type="text"
          placeholder="Search movies..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") handleSearchSubmit();
          }}
          className="flex-1 px-5 py-3 bg-transparent outline-none"
        />

        <button
          onClick={() => handleSearchSubmit()}
          className="bg-red-600 px-5 py-3"
        >
          <IoMdSearch size={24} />
        </button>

      </div>

      <h2 className="text-2xl mt-10 mb-4">
        🔥 Trending Movies
      </h2>

      <div className="flex gap-4 mb-10 flex-wrap">

        {trendingMovies.map((movie) => (

          <button
            key={movie}
            onClick={() => handleSearchSubmit(movie)}
            className="bg-zinc-800 px-4 py-2 rounded-lg"
          >
            {movie}
          </button>

        ))}

      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 w-[90%] max-w-6xl">

        {movies.map((movie) => (

          <Link key={movie.imdbID} to={`/movie/${movie.imdbID}`}>

            <div className="bg-zinc-900 rounded-lg p-3 hover:scale-105 transition">

              <img
                src={
                  movie.Poster !== "N/A"
                    ? movie.Poster
                    : "https://via.placeholder.com/300"
                }
                alt={movie.Title}
                className="w-full h-72 object-cover rounded-md"
              />

              <h2 className="mt-3 font-semibold">
                {movie.Title}
              </h2>

              <p className="text-gray-400">
                {movie.Year}
              </p>

            </div>

          </Link>

        ))}

      </div>

    </div>

  );
};

export default Moviehunt;