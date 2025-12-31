import { Metadata } from "next"
import CardContactUs from "../components/layout/cardContactUs"

export const metadata : Metadata =
{
    title: "Contact Us"
}

export default async function ContactUs()
{
    await fetch("https://jsonplaceholder.typicode.com/users")
    return(
        <div className="flex flex-col h-screen gap-3 bg-black animate-fade-up ">
            <div className="flex flex-col justify-center items-center min-h-screen ">
                {/* <h1 className=" text-5xl md:text-7xl font-semibold text-center"> <span className="md:hover:text-[#EBDB75]  md:hover:drop-shadow-[0_0_20px_#EBDB75] transition-colors ease-out">Contact Us</span></h1>                 */}
                <CardContactUs>
                    
                </CardContactUs>
            </div>
        </div>
    )
}