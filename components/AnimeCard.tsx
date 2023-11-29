import Image from 'next/image'
import { AnimeCardComponentProps } from '@/prop-types'
const AnimeCard: React.FC<AnimeCardComponentProps> = ({
    anime,
    index
}) => {
    return (
        <div className='max-w-sm rounded-md relative w-full'>
            <div className='relative w-full h-[37vh]'>
                <Image src={anime?.image.original} fill className='rounded-xl' alt={anime.name} />
            </div>
            <div className='py-4 flex flex-col gap-3'>
                <div className='flex justify-between items-center gap-1'>
                    <h2 className='font-bold text-white text-xl line-clamp-1 w-full'>{anime.name}</h2>
                </div>
            </div>
            <div>
                <div></div>
                <div></div>
            </div>
        </div>
    )
}

export default AnimeCard