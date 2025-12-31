export default function Loading()
{
    return (
    <div className="flex flex-col h-screen bg-black">
      
      {/* Header Skeleton */}
      <div className="w-screen py-20 bg-[#1E3A8A] flex justify-center items-center ">
        <div className="space-y-3">
            <div className="h-6 md:h-8 w-64 bg-neutral-200/30 rounded-md animate-pulse" />
        </div>
      </div>

      {/* Content Skeleton */}
      <div className="flex-1 overflow-y-scroll px-6 md:px-24 pt-6 space-y-10">

        {/* Paragraph 1 */}
        <div className="space-y-4 max-w-4xl mx-auto">
          <div className="h-5 bg-neutral-700 rounded animate-pulse w-full" />
          <div className="h-5 bg-neutral-700 rounded animate-pulse w-[95%]" />
          <div className="h-5 bg-neutral-700 rounded animate-pulse w-[90%]" />
          <div className="h-5 bg-neutral-700 rounded animate-pulse w-[85%]" />
        </div>

        {/* Paragraph 2 */}
        <div className="space-y-4 max-w-4xl mx-auto">
          <div className="h-5 bg-neutral-700 animate-pulse rounded w-full" />
          <div className="h-5 bg-neutral-700 animate-pulse rounded w-[92%]" />
          <div className="h-5 bg-neutral-700 animate-pulse rounded w-[88%]" />
        </div>

      </div>
    </div>
    )
}