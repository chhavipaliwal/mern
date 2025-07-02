import React, { useState } from "react";

export default function StudentCard({ name, grade }: any) {
  const [quizzes, setquizzes] = useState<string[]>([]);
  return (
    <div className="bg-white rounded-xl shadow-md p-4 w-64 border border-gray-200">
      <h2 className="text-lg font-bold text-gray-800">{name}</h2>
      <p className="text-gray-600 mb-2">Grade: {grade}</p>

      <button
        onClick={() => setquizzes([...quizzes, `Quiz ${quizzes.length + 1}`])}
        className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 transition mb-3"
      >
        Add Quiz
      </button>

      <h3 className="font-semibold text-gray-700">Quizzes:</h3>
      <ul className="list-disc list-inside text-sm text-gray-700">
        {quizzes.map((quiz, index) => (
          <li key={index}>{quiz}</li>
        ))}
      </ul>
    </div>
  );
}
