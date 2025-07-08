import React, { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };
  return (
    <>
      <div className="bg-gray-400 min-h-screen flex space-y-6  flex-col items-center justify-center">
        <h1 className=" text-xl">Counter</h1>
        <h2 className="text-3xl font-bold mb-4 ">Count: {count}</h2>
        <button
          onClick={increment}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300"
        >
          Increment
        </button>
        <h2 className="text-3xl font-bold text-violet-600">Violet 600</h2>
        <h2 className="text-3xl font-bold text-violet-400">Violet 400</h2>
        <h2 className="text-3xl font-bold text-violet-800">Violet 800</h2>
      </div>
    </>
  );
}
