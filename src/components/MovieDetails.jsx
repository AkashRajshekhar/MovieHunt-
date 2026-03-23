import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const MovieDetails = () => {

  const API_KEY = "e0e179fa";

  const { id } = useParams();

  const [movie, setMovie] = useState(null);

  useEffect(() => {

    const fetchMovie = async () => {

      const res = await fetch(
        `https://www.omdbapi.com/?apikey=${API_KEY}&i=${id}`
      );

      const data = await res.json();

      setMovie(data);

    };

    fetchMovie();

  }, [id]);

  if (!movie) return <h1>Loading...</h1>;

  return (

    <div className="bg-black text-white min-h-screen p-10">

      <img src={movie.Poster} alt={movie.Title} />

      <h1 className="text-3xl mt-5">
        {movie.Title}
      </h1>

      <p className="mt-3">
        {movie.Plot}
      </p>

      <p className="mt-2">
        ⭐ {movie.imdbRating}
      </p>

      <p className="mt-2">
        🎭 {movie.Actors}
      </p>

      <p className="mt-2">
        📅 {movie.Year}
      </p>

    </div>

  );
};

export default MovieDetails;