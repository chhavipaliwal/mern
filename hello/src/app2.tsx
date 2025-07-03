import Button from "../hooks/useCallback";
import { useState, useCallback } from "react";

const App2 = () => {
  const [count, setCount] = useState(0);
  const [darkMode, setDarkMode] = useState(false);

  const handleClick = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  return (
    <div
      className={`p-4 h-screen flex justify-center items-center flex-col gap-3 ${
        darkMode ? "bg-gray-800 text-white" : "bg-gray-200 text-black"
      }`}
    >
      <h1 className="text-xl">Count: {count}</h1>
      <Button onClick={handleClick} />
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="ml-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Toggle Dark Mode
      </button>
    </div>
  );
};

export default App2;
