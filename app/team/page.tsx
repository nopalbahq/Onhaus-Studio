import { Metadata } from "next"
import Card from "@/app/components/layout/card"

export const metadata : Metadata =
{
    title: "Team"
}

export default async function Team()
{
    await fetch("https://jsonplaceholder.typicode.com/users")
    return(
        <div className="flex flex-col h-screen gap-3 bg-black">
            <div className="w-full py-20 block bg-[#0D9488]  ">
                <h1 className="translate-y-4 text-5xl md:text-7xl font-semibold text-center"> <span className="md:hover:text-[#FFE2AF]  md:hover:drop-shadow-[0_0_20px_#FFE2AF] transition-colors ease-out">Meet the Team</span></h1>                
            </div>

            {/* Scroll */}
            <div className="flex-1 overflow-y-hidden pt-10 pb-12">
                <div className="grid justify-items-center gap-y-5">
                    {/* Jika ada update team disini mainin Gridnya */}
                {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-y-5"> */}
                    <Card image="/image/card/me_one.png" title="Muhammd Naufal Baihaqi" descript="Game Developer"> 
                    </Card>

                </div>
            </div>
        </div>
    )
}