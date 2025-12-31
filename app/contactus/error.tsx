"use client"

export default function Error() {
  return (
    <div className="flex h-screen flex-col items-center justify-center bg-black text-white text-center gap-2">
      <h1 className="text-4xl md:text-6xl font-semibold">
        Something went wrong
      </h1>
      <p className="text-sm md:text-base text-neutral-400">
        Please refresh the page or try again later.
      </p>
    </div>
  )
}
