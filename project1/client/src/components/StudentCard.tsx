import { useState } from "react";

export default function StudentCard({ name, grade }: any) {
  const [quizzes, setquizzes] = useState<string[]>([]);
  return (
    <>
      <div>
        <h2>{name}</h2>
        <p>Grade: {grade}</p>
        <button
          onClick={() => setquizzes([...quizzes, `Quiz ${quizzes.length + 1}`])}
        >
          Add Quiz
        </button>
        <h3>Quizzes:</h3>
        <ul>
          {quizzes.map((quiz, index) => (
            <li key={index}>{quiz}</li>
          ))}
        </ul>
      </div>
    </>
  );
}
