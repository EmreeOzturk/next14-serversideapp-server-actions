import Image from "next/image"

const LoadMore = () => {
    return (
        <>
            <section className="flex justify-center items-center w-full">
                <div>
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