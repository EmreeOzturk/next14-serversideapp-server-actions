import React from 'react'
import AnimeCard from './AnimeCard'
import { AnimeProps } from '@/prop-types'
import { fetchAnime } from '../app/action'

const ServerAnimeList = async () => {
    const animeData = await fetchAnime(1)
    return (
        <section className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-10">
            {
                animeData.map((anime: AnimeProps, index: number) => {
                    return (
                        <AnimeCard key={anime.id} anime={anime} index={index} />
                    )
                })
            }
        </section>
    )
}

export default ServerAnimeList