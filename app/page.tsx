import AnimeCard from '@/components/AnimeCard'
import LoadMore from '@/components/LoadMore'
import { fetchAnime } from './action'
import { AnimeProps } from '@/prop-types'

export default async function Home() {
  const dataAnime = await fetchAnime(1)
  return (
    <main className="py-16 px-8 sm:p-16 flex flex-col gap-10">
      <h2 className="text-3xl text-white font-bold">Explore Anime</h2>
      {/* <section className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-10">
        {
          dataAnime.map((anime: AnimeProps, index: number) => {
            return (
              <AnimeCard key={anime.id} anime={anime} index={index} />
            )
          })
        }
      </section> */}
      <LoadMore />
    </main>
  )
}
