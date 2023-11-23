import React from 'react'

type Props = {
  children: React.ReactNode
}

function Button({ children }: Props) {
  return (
    <button
      type="button"
      className="w-full flex justify-center items-center gap-2 bg-white text-sm text-gray-600 p-2 rounded-md hover:bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-200 transition-colors duration-300"
    >
      {children}
    </button>
  )
}

export default Button
