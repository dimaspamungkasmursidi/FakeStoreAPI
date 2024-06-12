import React from 'react'

export default function ButtonProducts(props) {
    const { children, variant = "bg-gradient-to-r from-slate-400 from-4% to-primary to-90% transform transition duration-500 hover:scale-110 shadow-lg" } = props
  return (
    <button
      className={`p-2 w-full ${variant} rounded-md transition duration-300 ease-in-out`}
    >
      {children}
    </button>
  )
}
