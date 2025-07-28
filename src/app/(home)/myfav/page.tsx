//@ts-nocheck
"use client"
import React, { useContext } from "react";
import { FavContext } from "../layout";
import MovieCard from "@/app/components/moviecard";

export default function Trending() {
  const { favMovies, setFavMovies } = useContext(FavContext);

  return (

    <div className="flex justify-start">
      {favMovies.map((item) => (
        <MovieCard key={item.id} elem={item} />
      ))}
    </div>
  );
}