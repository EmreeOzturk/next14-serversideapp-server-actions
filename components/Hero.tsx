import Image from "next/image";

const Hero = () => {
    return (
        <header className="bg-hero bg-center bg-cover bg-no-repeat flex justify-center py-16 px-8 sm:p-16 lg:items-center max-lg:flex-col w-full sm:gap-16 gap-0">
            <div className="flex-1 flex flex-col gap-10">
                <Image src="/logo.svg" alt="Anime Explorer" width={100} height={300} className="object-contain" />
                <h1 className="sm:text-6xl lg:max-w-lg text-5xl text-white font-bold leading-[120%]">Explore The <span className="text-red-500">
                    Diverse Realms </span>
                    of Anime Magic
                </h1>
            </div>
            <div className="relative w-full h-[50vh] justify-center lg:flex-1">
                <Image src="/anime.png" alt="Anime Explorer" fill className="object-contain" />
            </div>
        </header>
    )
}

export default Hero