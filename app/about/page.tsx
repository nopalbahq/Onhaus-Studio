import { Metadata } from "next"

export const metadata : Metadata = {
    title: "About"
}

export default async function about() {
    await fetch("https://jsonplaceholder.typicode.com/users")

    return (
        <div className="flex flex-col h-screen gap-3 bg-black">
            <div className="w-screen bg-neutral-primary-soft py-20 block bg-[#1E3A8A]  ">
                <h1 className="translate-y-4 text-5xl md:text-7xl font-semibold text-center"> <span className="md:hover:text-[#EBDB75]  md:hover:drop-shadow-[0_0_20px_#EBDB75] transition-colors ease-out">Made to Explore</span></h1>                
            </div>
            <div className="flex-1 overflow-y-scroll pl-10 pr-10 pb-20 pt-2 mt-5 animate-fade-up">
                <p className="font-light text-balance pl-4 pt-2 text-[20px] md:pl-103 md:pr-85 md:text-[22px] ">Founded in 2025, Onhaus Studio is an indie studio founded by one person who wanted to create the works that had been buried in his mind and express them in a game. With a small team and big hopes, he wanted to create a game that could be played in a fun and enjoyable way. Various gameplay to be developed and varied stories are the vision and mission of this small team.</p>
                <p className="font-light text-balance pl-4 pt-10 text-[20px] md:pl-103 md:pt-5 md:text-[22px] ">Focusing on 3D with a variety of gameplay styles and graphics, the implementation of a narrative story and single-player experience that OnHaus Studio wants to incorporate into its games.</p>
            </div>
        </div>
    )
    
}