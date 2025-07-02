import "./App.css";
import React, { useState, useEffect } from "react";
//import StudentCard from "./components/StudentCard";
import Timer from "./components/Timer";
import ConditionalRendering from "./components/ConditionalRendering";
import ToDo from "./components/to-do";

// export default function HelloWorld() {
//   const [count, setcount] = useState(0);
//   useEffect(() => {
//     console.log("useEffect called");
//   }, [count]);
//   return (
//     <div>
//       <div className="p-4 flex items-center flex-col gap-4">
//         <h1 className="font-bold text-2xl"> Classroom Dashboard</h1>
//         <StudentCard name="John Doe" grade="A" />
//         <StudentCard name="Jane Smith" grade="B" />
//         <StudentCard name="Alice Johnson" grade="C" />
//         <StudentCard name="Bob Brown" grade="B+" />
//       </div>
//     </div>
//   );
// }
export default function App() {
  return (
    <>
      <div className="bg-gray-400 min-h-screen flex  flex-col items-center justify-center">
        {/* <h1 className="text-5xl font-medium">Timer</h1> */}
        <div className="p-4 flex items-center flex-col gap-4">
          {/* <Timer /> */}
          {/* <ConditionalRendering /> */}
          <ToDo />
        </div>
      </div>
    </>
  );
}
