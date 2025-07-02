import "./App.css";
import { useState, useEffect } from "react";
import StudentCard from "./components/StudentCard";

// async function fetchData() {
//   const response = await axios.post("http://localhost:3000/", {
//     body: {
//       name: "John Doe",
//       age: 30,
//       city: "New York",
//     },
//   });
//   return response.data;
// }
export default function HelloWorld() {
  const [count, setcount] = useState(0);
  useEffect(() => {
    console.log("useEffect called");
  }, [count]);
  return (
    <div>
      <h1> Classroom Dashboard</h1>
      <StudentCard name="John Doe" grade="A" />
      <StudentCard name="Jane Smith" grade="B" />
      <StudentCard name="Alice Johnson" grade="C" />
      <StudentCard name="Bob Brown" grade="B+" />
      <p>Count: {count}</p>
      <div className="gap-2 flex ">
        <button onClick={() => setcount(count + 1)}>Increment</button>
        <button onClick={() => setcount(count - 1)}>Decrement</button>
        <button onClick={() => setcount(0)}>Reset</button>
      </div>
    </div>
  );
}
