//@ts-nocheck
"use client";

import { createContext, useState, useEffect, useMemo, Suspense } from "react";
import Header from "../components/header";
import SideBar from "../components/side-bar";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";



// Favorite context
export const FavContext = createContext([]);

// Search & Filter context
export const SearchContext = createContext([]);

export default function Layout({ children }) {

  const searchPage = useSearchParams();
  const pageNumber = searchPage.get("page")||1;
  
  const [favMovies, setFavMovies] = useState([]);
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);

  const pathName = usePathname();
  console.log();
  
  let url = `https://api.themoviedb.org/3/movie/popular?language=en-US&include_adult=false&page=${pageNumber ? pageNumber : 1}`;
  
  if(pathName==="/"){
    url = `https://api.themoviedb.org/3/movie/popular?language=en-US&include_adult=false&page=${pageNumber ? pageNumber : 1}`;
  }
  if(pathName==='/trending'){
    url = `https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=${pageNumber ? pageNumber : 1}`;
  }
  if(pathName===`/upcoming`){
    url = `https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=${pageNumber ? pageNumber : 1}`;
  }
  if(pathName===`/toprated`){
    url = `https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=${pageNumber ? pageNumber : 1}`;
  }

 
 

  
  
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMjQzZTRjOTUyN2NlMzViMGQzZTBjNWMwMmNkY2YzOCIsIm5iZiI6MTc1MjU5MjY1My45MDcsInN1YiI6IjY4NzY3MTBkOTZlZjI4YTc2OGVmMWE3NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.TnGB6OqJPD0BfnReLJUaHweP_llLoNGqvU0BkHPeBwU'
    }
  };

  try {
    useEffect(() => {
      async function getMovies() {
        const res = await fetch(url, options);
        const result = await res.json();
        setData(result.results || []);
      }

      getMovies();
    }, [url]);
  } catch (e) {

  }
// only work when search,data change else returns same value
  const filteredData = useMemo(() => {
    return data.filter((movie) =>
      movie.title?.toLowerCase().includes(search.toLowerCase())
    );
  }, [search, data]);

  return (
   
      <FavContext.Provider value={{ favMovies, setFavMovies }}>
        <SearchContext.Provider value={{ search, setSearch, filteredData,data,setData }}>
          <Header />
          <div className="flex ">
            <div><SideBar /></div>

            <div>{children}</div>

            

          </div>
        </SearchContext.Provider>
      </FavContext.Provider>
      
   
  );
}
