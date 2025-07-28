// @ts-nocheck
import { useContext } from "react";
import { FavContext } from "../(home)/layout";
import Image from "next/image";

export default function MovieCard({ elem }) {
  const { favMovies, setFavMovies } = useContext(FavContext);

  // const imagePath = `https://image.tmdb.org/t/p/w185/${elem.poster_path}`;
  const handleAdd = () => {
    const existItem= favMovies.some((item)=>{
      if(item.id===elem.id) return true
    })
    if( existItem===false){

      setFavMovies([...favMovies, elem]) // elem(movie) added to array of fav movies with previous movies favMovies arry
    }
  };

  return (
    <div className=" flex flex-col items-center justify-between border w-60 p-5 h-100 rounded-3xl m-2 @min-sm:flex-col">
      <div className="w-50 h-70 bg-gray-200 mb-2 relative rounded-2xl">

        <Image
          src={`https://image.tmdb.org/t/p/w185/${elem.poster_path}`}
          alt={elem.title}
         fill
          className="object-cover rounded-2xl"
        />
      </div>
      
      <div>
        <h2 className="text-lg font-semibold mb-1">{elem.title}</h2>
        {/* <p className="text-sm text-gray-600 mb-3">{elem.description}</p> */}
      </div>
      
      <div>
        
        <button
          onClick={handleAdd}
          className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">
          Add to Favorites
        </button>

        </div>
      </div>
      );
}