//@ts-nocheck
"use client";
import { Suspense, useContext } from "react";
import { SearchContext } from "../layout";
import MovieCard from "@/app/components/moviecard";
import Link from "next/link";
import { usePathname } from "next/navigation";



export default function Trending() {
  const { filteredData } = useContext(SearchContext);
  const pathName = usePathname(); // gives current path not query params


  return (
    <div>
      <div className="flex flex-wrap gap-3 justify-center">
        {filteredData.map((movie) => (
          <MovieCard key={movie.id} elem={movie} />
        ))}

      </div>
      <div className=" border-blue-800 text-white flex gap-5 justify-center items-center h-15 font-extrabold text-2xl nth-[n]:text-red-500  ">
        <Link href={`${pathName}/?page=1`} className="p-3 m-3 hover:border-2  ">1</Link>
        <Link href={`${pathName}/?page=8`} className=" p-3 m-3 hover:border-2">2</Link>
        <Link href={`${pathName}/?page=6`}className="p-3 m-3 hover:border-2">3</Link>
        <Link href={`${pathName}/?page=16`} className=" p-3 m-3 hover:border-2">4</Link>
        <Link href={`${pathName}/?page=12`} className=" p-3 m-3 hover:border-2">5</Link>

      </div>
    </div>

  );
}
