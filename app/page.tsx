import LoadMore from '@/components/LoadMore'
import ServerAnimeList from '@/components/ServerAnimeList'

export default async function Home() {
  return (
    <main className="py-16 px-8 sm:p-16 flex flex-col gap-10">
      <h2 className="text-3xl text-white font-bold">Explore Anime</h2>
      <ServerAnimeList />
      <LoadMore />
    </main>
  )
}
