export default function Loading()
{
    return(
       <div className="flex flex-col h-screen gap-3 bg-black">

      <div className="flex flex-col justify-center items-center min-h-screen">

        {/* Card Skeleton */}
        <div className="flex flex-col justify-center items-center max-w-4xl p-5 border border-white/20 rounded-lg bg-[#404040] animate-pulse">

          {/* Title Skeleton */}
          <div className="h-14 w-64 bg-neutral-300/30 rounded-md mt-5" />

          {/* Content Skeleton */}
          <div className="flex flex-col justify-center mt-4 pt-2 pb-4 items-center gap-4">

            {/* Subtitle Skeleton */}
            <div className="h-6 w-40 bg-neutral-300/20 rounded-md" />

            {/* Social Icons Skeleton */}
            <div className="flex justify-center gap-5 mt-2 pt-2 items-center">

              <div className="w-7.5 h-7.5 rounded-full bg-neutral-300/30" />

              <div className="h-6 w-0.5 bg-neutral-300/20" />

              <div className="w-7.5 h-7.5 rounded-full bg-neutral-300/30" />

            </div>

          </div>
        </div>

      </div>
    </div>
    )
}