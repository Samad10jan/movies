//@ts-nocheck
"use client"
import { Button, Switch, Theme } from "@radix-ui/themes";
import { ThemeContext } from "../layout";
import { useContext } from "react";
import Link from "next/link";
import { useState, useEffect, useMemo } from "react";
import { SearchContext } from "../(home)/layout";
import { Heart } from "lucide-react";

export default function Header() {
    const { isDark, setIsDark } = useContext(ThemeContext)
    const { search, setSearch, filteredData } = useContext(SearchContext);

    //  const [search, setSearch] = useState("");
    //   const [data, setData] = useState([]);

    //   useEffect(() => {
    //     async function getMovies() {
    //       try {
    //         const response = await fetch(url,options);
    //         const data = await response.json();
    //         setData(data.results || []);
    //       } catch (error) {
    //         console.error("Error fetching data:", error);
    //       }
    //     }

    //     getMovies();
    //   }, []);

    //   const filteredData = useMemo(() => {
    //     return data.filter((elem) =>
    //       elem.title.toLowerCase().includes(search.toLowerCase())
    //     );
    //   }, [search, data]);

    return (
        <header className="h-[10vh] border-b flex justify-between items-center px-10 bg-blue-950 text-white" >

            <Link href={"/"}> <div>
                <h1>Movie App</h1>
            </div></Link>
            <div>

                <input style={{border:"1px solid white", borderRadius:"5px", width:"30em",padding:"5px"}}
                    type="text"
                    value={search}
                    placeholder="Search"
                    onChange={(event) => setSearch(event.target.value)} className="bg-i" />

            </div>
            <div>
                <Button color="red" >
                    <Link href={"/myfav"} className="flex gap-3"><Heart /> My Fav</Link></Button>
            </div>
            <div className="flex justify-center items-center">
                
                <Switch onCheckedChange={function () {
                    setIsDark(!isDark)
                }} />
                <p className="text-4xl">{isDark?"🌙":"☀️"}</p>
            </div>



        </header>

    )
}