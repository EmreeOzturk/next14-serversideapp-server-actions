"use client"
import Image from "next/image"
import { useInView } from "react-intersection-observer"
import { useEffect, useState } from "react"
import { AnimeProps } from "@/prop-types"
import AnimeCard from "./AnimeCard"
import { fetchAnime } from "@/app/action"

let page = 0;
const LoadMore = () => {

    const { ref, inView } = useInView();
    const [dataAnime, setDataAnime] = useState<AnimeProps[]>([])

    useEffect(() => {
        if (inView) {
            fetchAnime(page + 1).then((res) => {
                setDataAnime([...dataAnime, ...res])
            })
            page++;
        }
    }, [inView, dataAnime])
    return (
        <>
            <section className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-10">
                {
                    dataAnime.map((anime: AnimeProps, index: number) => {
                        return (
                            <AnimeCard key={anime.id} anime={anime} index={index} />
                        )
                    })
                }
            </section>
            <section className="flex justify-center items-center w-full"  >
                <div ref={ref}>
                    <Image
                        src="./spinner.svg"
                        alt="spinner"
                        width={50}
                        height={50}
                        className="object-contain"
                    />
                </div>
            </section>
        </>
    )
}

export default LoadMore