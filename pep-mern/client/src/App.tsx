import "./App.css";
import React, { useState, useEffect } from "react";
import StudentCard from "./components/StudentCard";

export default function HelloWorld() {
  const [count, setcount] = useState(0);
  useEffect(() => {
    console.log("useEffect called");
  }, [count]);
  return (
    <div>
      <div className="p-4 flex items-center flex-col gap-4">
        <h1 className="font-bold text-2xl"> Classroom Dashboard</h1>
        <StudentCard name="John Doe" grade="A" />
        <StudentCard name="Jane Smith" grade="B" />
        <StudentCard name="Alice Johnson" grade="C" />
        <StudentCard name="Bob Brown" grade="B+" />
      </div>
    </div>
  );
}
