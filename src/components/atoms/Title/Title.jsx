import React from 'react'

export default function Title({children}) {
  return (
    <section className="text-center">
    <h1 className="text-4xl font-bold londrina-black tracking-wider">
      {children}
    </h1>
    </section>
  )
}
