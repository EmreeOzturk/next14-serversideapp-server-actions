import Image from 'next/image'
import { AnimeCardComponentProps } from '@/prop-types'
import { MotionDiv } from './MotionDiv'
const AnimeCard: React.FC<AnimeCardComponentProps> = ({
    anime,
    index,
    counter
}) => {
    return (
        <MotionDiv
            className='w-full h-full flex flex-col gap-2'
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
                type: "spring",
                stiffness: 60,
                damping: 20,
                duration: 1,
                delay: counter * 0.11
            }}
        >
            <div className='max-w-sm rounded-md relative w-full'>
                <div className='relative w-full h-[37vh]'>
                    <Image src={'https://shikimori.one/' + anime?.image.original} fill className='rounded-xl' alt={anime.name} />
                </div>
                <div className='py-4 flex flex-col gap-3'>
                    <div className='flex justify-between items-center gap-1'>
                        <h2 className='font-bold text-white text-xl line-clamp-1 w-full'>{anime.name}</h2>
                        <div className='py-1 px-2 bg-[#161921] rounded-sm'>
                            <p className="text-white text-sm font-bold capitalize">
                                {anime.kind}
                            </p>
                        </div>
                    </div>
                    <div className="flex gap-4 items-center">
                        <div className="flex flex-row gap-2 items-center">
                            <Image
                                src="./episodes.svg"
                                alt="episodes"
                                width={20}
                                height={20}
                                className="object-contain"
                            />
                            <p className="text-base text-[#d03941] font-bold">
                                {anime.episodes || anime.episodes_aired}
                            </p>
                        </div>
                        <div className="flex flex-row gap-2 items-center">
                            <Image
                                src="./star.svg"
                                alt="star"
                                width={18}
                                height={18}
                                className="object-contain"
                            />
                            <p className="text-base font-bold text-[#FFAD49]">{anime.score}</p>
                        </div>
                    </div>
                </div>
                <div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        </MotionDiv>
    )
}

export default AnimeCard