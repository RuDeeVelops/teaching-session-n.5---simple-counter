import React, { useState } from 'react'

const Counter = () => {
  const [count, setCount] = useState(0)

  const increment = () => setCount((prevCount) => prevCount + 1)
  const decrement = () => setCount((prevCount) => (prevCount > 0 ? prevCount - 1 : 0))
  const reset = () => setCount(0)

  return (
    <div className="bg-gray-900 min-h-screen flex items-center justify-center font-sans">
      <div className="bg-gray-800 p-12 rounded-lg shadow-xl text-center">
        <h1 className="text-4xl font-bold mb-8 text-blue-300">The Counter</h1>
        <p className="text-7xl font-semibold mb-10 text-blue-100">{count}</p>
        <div className="space-x-4">
          <button
            onClick={decrement}
            className="px-6 py-3 bg-blue-700 text-blue-100 rounded-full hover:bg-blue-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={count === 0}
          >
            -
          </button>
          <button onClick={reset} className="px-6 py-3 bg-blue-700 text-blue-100 rounded-full hover:bg-blue-600 transition-colors">
            Reset
          </button>
          <button onClick={increment} className="px-6 py-3 bg-blue-700 text-blue-100 rounded-full hover:bg-blue-600 transition-colors">
            +
          </button>
        </div>
      </div>
    </div>
  )
}

export default Counter
