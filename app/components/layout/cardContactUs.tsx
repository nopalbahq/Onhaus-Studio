import Link from "next/link"
import Image from "next/image"

export default function CardContactUs()
{
    return(
        <div className="flex flex-col justify-center items-center max-w-4xl p-5 border border-white rounded-lg bg-[#404040]">
            <h1 className="pr-5 pt-5 pl-5 font-semibold text-6xl">Let's Connect</h1>
                <div className="flex flex-col justify-center mt-2 pt-2 pb-4">
                    <p className="font-light text-[24px] text-center">Reach us here</p>
                    <div className="flex justify-center gap-5 mt-2 pt-2">
                        <Link href="https://x.com/itsmenopalbah" className="hover:-translate-y-1 transition">
                            <Image src={"/image/x-white.png"} alt="" height={30} width={30}></Image>
                        </Link>
                        <p className="text-[20px]"> | </p> 
                        <Link href="https://www.instagram.com/mnaufalbah/" className="hover:-translate-y-1 transition">
                            <Image src={"/image/Instagram-white.png"} alt="" height={30} width={30}></Image>   
                        </Link>
                    </div>
                </div>
        </div>
    )
}