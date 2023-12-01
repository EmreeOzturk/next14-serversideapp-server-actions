"use client"
import Image from "next/image"
import { useInView } from "react-intersection-observer"
import { useEffect, useState } from "react"
import AnimeList from "./AnimeList"

const LoadMore = () => {

    const { ref, inView } = useInView();
    const [page, setPage] = useState(2);
    useEffect(() => {
        if (inView) {
            setPage(page + 1)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [inView])
    return (
        <>
            <AnimeList pageNum={page} />
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