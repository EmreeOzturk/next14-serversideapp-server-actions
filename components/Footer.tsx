import Image from "next/image"

const Footer = () => {
    return (
        <footer className="sm:px-16 py-4 px-8 flex justify-between items-center gap-2 flex-wrap bg-[#161921]">
            <p className="text-base font-bold text-white">@2023 AnimeExplorer</p>
            <Image src="/logo.svg" alt="Anime Explorer" width={50} height={50} className="object-contain" />
            <div className="flex items-center gap-6">
                <Image src="/twitter.svg" alt="Twitter" width={20} height={20} className="object-contain" />
                <Image src="/tiktok.svg" alt="Facebook" width={20} height={20} className="object-contain" />
                <Image src="/instagram.svg" alt="Instagram" width={20} height={20} className="object-contain" />

            </div>
        </footer>
    )
}

export default Footer