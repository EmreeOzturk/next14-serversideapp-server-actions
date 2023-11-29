import AnimeCard from '@/components/AnimeCard'
import LoadMore from '@/components/LoadMore'
import { data } from '@/data'
export default function Home() {
  return (
    <main className="py-16 px-8 sm:p-16 flex flex-col gap-10">
      <h2 className="text-3xl text-white font-bold">Explore Anime</h2>
      <section className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-10">
        {
          data.map((anime, index) => {
            return (
              <AnimeCard key={anime.id} anime={anime} index={index} />
            )
          })
        }
      </section>
      <LoadMore />
    </main>
  )
}
