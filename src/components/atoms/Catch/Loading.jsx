import React from "react";

export default function Loading() {
  return (
    <div className="relative h-[100vh] md:h-80 px-4 py-8 md:py-14">
      <div className="flex flex-col items-center justify-center">
        <br /><br /><br />
        <div className="flex flex-col items-center justify-center">
        <div className="absolute top-16 loading loading-spinner loading-lg"></div>
        <p className="absolute top-10 text-xl">Loading...</p>
        </div>
      </div>
    </div>
  );
}
