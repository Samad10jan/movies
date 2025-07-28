//@ts-nocheck
"use client";
import { Suspense, useContext } from "react";
import { PagingContext, SearchContext } from "./layout";
import MovieCard from "../components/moviecard";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";


export default function Home() {
 
//<Suspense fallback={<div style={{display:"flex", justifyContent:"center"}}><Image src={"/1477.gif"} alt="loading.." width={150} height={150}/></div>}  >
      
     
     

  return (
      <Suspense fallback={<div style={{display:"flex", justifyContent:"center"}}><Image src={"/831.gif"} alt="loading.." width={150} height={150}/></div>}  >
    
     <ShowMovies/>
     </Suspense>

  );
}

function ShowMovies(){
   const { filteredData } = useContext(SearchContext);
  return(
    <div>
      <div className="flex flex-wrap gap-3 justify-center">

        {filteredData.map((movie) => (
          <MovieCard key={movie.id} elem={movie} />
        ))}
        

      </div>
     
      <div className=" border-blue-800 text-white flex gap-5 justify-center items-center h-15 font-extrabold text-2xl nth-[n]:text-red-500  ">
        <Link href={"/?page=1"} className="p-3 m-3 hover:border-2 ">1</Link>
        <Link href={"/?page=8"} className=" p-3 m-3 hover:border-2">2</Link>
        <Link href={"/?page=6"}className="p-3 m-3 hover:border-2">3</Link>
        <Link href={"/?page=16"} className=" p-3 m-3 hover:border-2">4</Link>
        <Link href={"/?page=12"} className=" p-3 m-3 hover:border-2">5</Link>

      </div>
    </div>
  )

}
