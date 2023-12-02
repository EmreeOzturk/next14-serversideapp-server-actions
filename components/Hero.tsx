import Image from "next/image";

const Hero = () => {
    return (
        <header className="bg-hero bg-center bg-cover  bg-no-repeat flex justify-between py-16 pl-8 sm:py-16 sm:pl-16  lg:items-center max-lg:flex-col w-full sm:gap-16 gap-0">
            <div className="flex-1 flex flex-col gap-10 ">
                <Image src="/logo.svg" alt="Anime Explorer" width={100} height={300} className="object-contain" />
                <h1 className="sm:text-6xl lg:max-w-lg text-5xl text-white font-bold leading-[120%]">Explore The <span className="red-gradient">
                    Diverse Realms </span>
                    of Anime Magic
                </h1>
            </div>
            <div className="relative -right-20 w-full h-[50vh] items-end justify-end lg:flex-1 ">
                <Image src="/anime.png" alt="Anime Explorer" fill className="object-contain " />
            </div>
        </header>
    )
}

export default Hero