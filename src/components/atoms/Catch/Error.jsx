import React from 'react'

export default function Error() {
  return (
    <div className="px-4 py-8 md:py-14">
      <div className="flex flex-col items-center justify-center">
        <br /><br /><br />
        <div className="flex flex-col items-center justify-center">
            <img src="/images/error.png" alt="Error" className="w-40 h-40" />
            <p className="text-xl">Something went wrong. Please try again later.</p>
        </div>
      </div>
    </div>
  )
}
