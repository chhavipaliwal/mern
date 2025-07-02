import React, { useState, useEffect } from "react";
export default function Timer() {
  const [seconds, setSeconds] = useState(0);
  useEffect(() => {
    const id = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(id);
  }, [seconds]);
  return (
    <div className=" border-black border p-6 rounded-lg shadow-md w-80 text-center">
      <h2>Elapsed Time: {seconds} seconds</h2>
    </div>
  );
}
