import { useState } from "react";
import React from "react";

export default function ConditionalRendering() {
  const [status, setStatus] = useState("success");
  return (
    <>
      <div>
        <h2 className="text-3xl mb-4">Status Checker</h2>
        {status === "loading" ? (
          <p>⏳ Loading...</p>
        ) : status === "success" ? (
          <p>✅ Success!</p>
        ) : status === "error" ? (
          <p>❌ Error occurred!</p>
        ) : (
          <p>ℹ️ Waiting...</p>
        )}

        <div className="mt-4">
          <button
            onClick={() => setStatus("success")}
            className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600 transition mr-2"
          >
            Set Success
          </button>
          <button
            onClick={() => setStatus("error")}
            className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition mr-2"
          >
            Set Error
          </button>
          <button
            onClick={() => setStatus("loading")}
            className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600 transition"
          >
            Set Loading
          </button>
          <button
            onClick={() => setStatus("idle")}
            className="bg-gray-500 text-white px-3 py-1 rounded hover:bg-gray-600 transition ml-2"
          >
            Set Idle
          </button>
        </div>
      </div>
    </>
  );
}
