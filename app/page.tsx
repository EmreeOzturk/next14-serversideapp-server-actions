import AnimeCard from '@/components/AnimeCard'
import { data } from '@/data'
export default function Home() {
  return (
    <main className="">
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
      {/* <LoadMore /> */}
    </main>
  )
}
