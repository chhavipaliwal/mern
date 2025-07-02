import React, { useState, useEffect, useRef } from "react";

const fmt = (ms) => {
  const total = Math.floor(ms / 1000);
  const seconds = total % 60;
  const minutes = Math.floor(total / 60) % 60;
  const hours = Math.floor(total / 3600);
  return `${hours.toString().padStart(2, "0")}:${minutes
    .toString()
    .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
};

export default function Timer() {
  const [mode, setMode] = useState<"up" | "down">("up");
  const [seconds, setSeconds] = useState(0);
  const [running, setRunning] = useState(false);
  const [timeMs, setTimeMs] = useState(0);
  const [countdownMins, setCountdownMinutes] = useState(1);
  const intervalref = useRef<ReturnType<typeof setInterval> | null>(null);
  const toggleRun = () => {
    setRunning((r) => !r);
  };
  const reset = () => {
    setRunning(false);
    clearInterval(intervalref.current!);
    setTimeMs(mode === "up" ? 0 : countdownMins * 60 * 1000);
  };
  const switchMode = () => {
    setRunning(false);
    clearInterval(intervalref.current!);
    const next = mode === "up" ? "down" : "up";
    setMode(next);
    setRunning(false);
    setTimeMs(next === "up" ? 0 : countdownMins * 60 * 1000);
  };
  useEffect(() => {
    if (!running) return;
    intervalref.current = setInterval(() => {
      setTimeMs((prev) => {
        if (mode === "up") return prev + 1000;
        if (prev <= 1000) {
          alert("Time's up!");
          setRunning(false);
          return 0;
        }
        return prev - 1000;
      });
    }, 1000);
    return () => clearInterval(intervalref.current!);
  }, [running, mode, countdownMins]);
  useEffect(() => {
    if (mode === "down") setTimeMs(countdownMins * 60 * 1000);
  }, [mode, countdownMins]);
  //    const [formattedTime, setFormattedTime] = useState(fmt(0));
  //   useEffect(() => {
  //     const id = setInterval(() => {
  //       setSeconds((prev) => prev + 1);
  //     }, 1000);
  //     return () => clearInterval(id);
  //   }, [seconds]);
  return (
    <div className="max-w-md mx-auto mt-10 bg-white border border-gray-300 shadow-lg rounded-xl p-6 text-center space-y-6">
      {/* <h2>Elapsed Time: {seconds} seconds</h2> */}
      <h2 className="text-3xl font-semibold text-gray-800">
        {mode === "up" ? "🕒 Stopwatch" : "⏳ Countdown Timer"}
      </h2>
      <p className="text-3xl font-mono mb-4">{fmt(timeMs)}</p>

      <div className="flex flex-wrap justify-center gap-4">
        <button
          onClick={toggleRun}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
        >
          {running ? "⏸️ Pause" : "▶️ Start"}
        </button>

        <button
          onClick={reset}
          className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600 transition"
        >
          🔄 Reset
        </button>
        <button
          onClick={switchMode}
          className="px-4 py-2 bg-gray-700 text-white rounded hover:bg-gray-800 transition"
        >
          {mode === "up" ? "Switch to Countdown" : "Switch to Stopwatch"}
        </button>
      </div>
      {mode === "down" && !running && (
        <div className="mb-4">
          <label>
            Minutes:&nbsp
            <input
              type="number"
              value={countdownMins}
              onChange={(e) => setCountdownMinutes(Number(e.target.value))}
              className="border border-gray-300 rounded px-2 py-1 w-16 text-center"
            />
          </label>
        </div>
      )}
    </div>
  );
}
