"use client"
import { fetchAnime } from '@/app/action'
import { AnimeProps } from '@/prop-types'
import AnimeCard from './AnimeCard'
import { useEffect, useState } from 'react'


type AnimeListProps = {
    pageNum: number
}
const AnimeList: React.FC<AnimeListProps> = ({
    pageNum
}) => {

    const [dataAnime, setDataAnime] = useState<AnimeProps[]>([])
    useEffect(() => {
        fetchAnime(pageNum).then((res) => {
            setDataAnime([...dataAnime, ...res])
        })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [pageNum])

    return (
        <section className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-10">
            {
                dataAnime.map((anime: AnimeProps, index: number) => {
                    const counter = index % 8;
                    return (
                        <AnimeCard key={anime.id} anime={anime} index={index} counter={counter} />
                    )
                })
            }
        </section>
    )
}

export default AnimeList