export default function Loading() {
  return (
    <div className="flex flex-col h-screen gap-3 bg-black">

      {/* Header Skeleton */}
      <div className="w-full py-20 bg-[#0D9488] flex justify-center items-center">
        <div className="space-y-3">
          <div className="h-8 md:h-10 w-72 bg-neutral-200/30 rounded-md animate-pulse" />
        </div>
      </div>

      {/* Content Skeleton */}
      <div className="flex-1 overflow-y-hidden pt-10 pb-12">
        <div className="grid justify-items-center gap-y-5">

          {/* Skeleton Card */}
          <div className="w-full max-w-md bg-white/10 rounded-lg overflow-hidden animate-pulse">
            <div className="flex">

              {/* Image Skeleton */}
              <div className="w-40 h-52 bg-neutral-300/20 m-5 rounded-md" />

              {/* Text Skeleton */}
              <div className="flex flex-col justify-center px-4 py-3 gap-3 flex-1">
                <div className="h-5 w-3/4 bg-neutral-300/30 rounded" />
                <div className="h-4 w-1/2 bg-neutral-300/20 rounded" />
              </div>

            </div>
          </div>

          {/* Duplicate if needed */}
          {/* Card Skeleton 2 */}
          <div className="w-full max-w-md bg-white/10 rounded-lg overflow-hidden animate-pulse">
            {/* <div className="flex">
              <div className="w-40 h-52 bg-neutral-300/20 m-5 rounded-md" />
              <div className="flex flex-col justify-center px-4 py-3 gap-3 flex-1">
                <div className="h-5 w-2/3 bg-neutral-300/30 rounded" />
                <div className="h-4 w-1/3 bg-neutral-300/20 rounded" />
              </div>
            </div> */}
          </div>

        </div>
      </div>

    </div>
  )
}
