"use client"

import Image from "next/image"

// Magic UI
import { MagicCard } from "@/components/ui/magic-card"

type CardProps = {
        image: string,
        title: string,
        descript : string
    }

export default function Card({image, title, descript} : CardProps)
{
    return(
        <>
        {/* Card */}
            <MagicCard gradientColor="#2dd4bf55" className="w-full max-w-md bg-white rounded-lg shadow-teal-300 overflow-hidden transition-all duration-300 animate-fade-up hover:shadow-lg hover:-translate-y-1">
                <div className="flex">
                    <div className="relative w-40 h-52 shrink-0">
                        <Image src={image} alt="Photo" width={128*2} height={128*2}
                        className="p-5 object-contain w-full h-full "></Image>
                    </div>
                    {/* Content H and P */}
                    <div className="flex flex-col justify-center px-4 py-3 ">
                        <h2 className="font-bold ">{title}</h2>
                        <p className="font-light  text-[14px] pt-2">{descript}</p>
                    </div>
                </div>
             </MagicCard>
        </>
    )

}

