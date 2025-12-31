'use client'
import Link from "next/link";
import Image from "next/image";
import badgeNonColorUI from "@/app/components/ui/badge.png"
import badgeWhite from "@/public/image/itchio-logo-white.png"

// Magic UI
import { AuroraText } from "@/components/ui/aurora-text";
import { LightRays } from "@/components/ui/light-rays";

export default function Home() {

  return (
    <div className="flex flex-col justify-center items-start px-7 md:items-center min-h-screen font-sans">
      <LightRays></LightRays>
        <h1 className="text-6xl font-bold text-white animate-fade-up animation-fade-delay-1">
  Welcome to{" "}
  {/* <span className="bg-clip-text text-transparent bg-linear-to-r from-white to-zinc-500">
    Onhaus Studio
  </span> */}
  <AuroraText>Onhaus Studio</AuroraText>
</h1>
        <div className="flex -translate-x-2 mt-5 gap-3 animate-fade-up [animation-delay:0.5s]">
          <div className="px-4 pb-3 hover:-translate-y-2 transition">
            <Link href="https://nopalbah.itch.io/">
              <p className="flex justify-center translate-x-5 translate-y-1 ">Available On</p>
              <Image src={badgeWhite} alt="Itch.io" width={120*2} height={40*2} className="cursor-pointer "></Image>
            </Link>
          </div>
        </div>
        

        <style jsx>{`
        @keyframes textColor {
        0% { color: #E1AA20; }
        50% { color: #1F52E0; }
        100% { color: #E1AA20; }
        }

        .animate-text {
        animation: textColor 2s infinite;
          }
        `}</style>
    </div>

    
  );
}
