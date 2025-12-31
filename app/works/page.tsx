import { Metadata } from "next"
import Image from "next/image"
import Link  from "next/link"

export const metadata : Metadata =
{
    title: 'Works'
}

export default async function Works()
{
    await fetch("https://jsonplaceholder.typicode.com/users")
    return(
        <div className="flex flex-col h-screen gap-3 bg-black">
            <div className="w-screen bg-neutral-primary-soft py-20 block bg-[#D4A017]">
                <h1 className="translate-y-4 text-5xl md:text-7xl font-semibold text-center"> <span className="md:hover:text-[#e5f993]  md:hover:drop-shadow-[0_0_20px_#e5f993] transition-colors ease-out">Our Creations</span></h1>                
            </div>
            <div className="flex-1 overflow-y-scroll flex flex-col items-center pl-10 pr-10 pb-20 pt-2 mt-5">
                {/* <h2 className="font-semibold text-left text-[24px]">OUR WORKS</h2> */}
                    <div className="pt-2 mt-5 rounded-lg ">
                        <Image src="/image/ORBBY.png" height={1280} width={720} alt="" className="rounded-lg animate-fade-up"></Image>
                    </div>
                    <div className="animate-fade-up [animation-delay:0.5s] mt-10 hover:-translate-y-1 transition">
                        <Link href="https://nopalbah.itch.io/orbby" >
                                <Image src="/image/badge-color.png" alt="" height={200} width={200}></Image>
                        </Link>
                    </div>
            </div>
        </div>
    )
}