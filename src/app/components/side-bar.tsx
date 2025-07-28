"use client"
import { Button, Switch, Theme } from "@radix-ui/themes";
import { Flame, Home, Rocket } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function SideBar() {
    const path = usePathname();
    const isUpComing= path == '/upcoming'
    const isTrending = path == '/trending'
    const isTopRated = path == '/toprated'
    return (

        <>
            <div className="w-max border-r h-[100%] bg-blue-950  ">
                <div className="flex flex-col p-5 gap-5">
                
                    <Button style={
                        {
                            width: "100%",
                            height:"20%",
                            backgroundColor: isTrending ? "green" : ""

                        }}>
                        <Link href={"/trending"} className="flex"><Flame /> Trending </Link></Button>

                    <Button style={
                        {
                            width: "100%",
                             height:"10%",
                            backgroundColor: isUpComing? "green" : ""

                        }}>
                        <Link href={"/upcoming"} className="flex gap-3"><Rocket /> Up Coming </Link></Button>

                    <Button style={
                        {
                            width: "100%",
                             height:"10%",
                            backgroundColor: isTopRated ? "green" : ""

                        }}>
                        <Link href={"/toprated"} className="flex gap-3"><Rocket /> Top Rated </Link></Button>

                </div>

            </div>
        </>




    )
}