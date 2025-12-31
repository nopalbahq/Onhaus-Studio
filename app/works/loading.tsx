export default function Loading()
{
    return(
        

        //Card
       <div className="flex flex-col h-screen gap-3 bg-black">

      {/* Header Skeleton */}
      <div className="w-screen py-20 bg-[#D4A017] flex justify-center items-center">
        <div className="h-8 md:h-10 w-72 bg-neutral-200/30 rounded-md animate-pulse" />
      </div>

      {/* Content Skeleton */}
      <div className="flex-1 overflow-y-scroll flex flex-col items-center pl-10 pr-10 pb-20 pt-2 mt-5">

        {/* Main Image Skeleton */}
        <div className="pt-2 mt-5 rounded-lg w-full max-w-4xl">
          <div className="w-full aspect-9/16 bg-neutral-300/20 rounded-lg animate-pulse" />
        </div>

        {/* Badge / CTA Skeleton */}
        <div className="mt-10">
          <div className="w-50 h-50 rounded-full bg-neutral-300/20 animate-pulse" />
        </div>

      </div>

    </div>
    )
}