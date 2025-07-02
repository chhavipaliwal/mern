import React, { useState, useEffect } from "react";

export default function ToDo() {
  const [tasks, setTasks] = useState([
    { id: 1, text: "Task 1", completed: false },
    { id: 2, text: "Task 2", completed: false },
  ]);
  const [newTask, setNewTask] = useState("");

  return (
    <div className="max-w-md mx-auto mt-10 bg-white shadow-md rounded-xl p-6">
      <h1 className="text-3xl font-bold mb-6 text-center text-blue-600">
        📝 To-Do List
      </h1>

      <div className="flex gap-2 mb-6">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Add new task..."
          className="flex-grow border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button
          onClick={() => {
            if (newTask) {
              setTasks((prevTasks) =>
                prevTasks.concat({
                  id: Date.now(),
                  text: newTask,
                  completed: false,
                })
              );
              setNewTask("");
            }
          }}
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition"
        >
          Add
        </button>
      </div>

      <ul className="space-y-3">
        {tasks.map((task) => (
          <li
            key={task.id}
            className={`flex items-center justify-between bg-gray-100 px-4 py-2 rounded-lg shadow-sm transition ${
              task.completed ? "line-through text-gray-400" : ""
            }`}
          >
            <span
              onClick={() => {
                setTasks(
                  tasks.map((t) => {
                    if (t.id === task.id) {
                      return {
                        id: t.id,
                        text: t.text,
                        completed: !t.completed,
                      };
                    } else {
                      return t;
                    }
                  })
                );
              }}
              className="cursor-pointer hover:text-blue-500 transition"
            >
              {task.text}
            </span>

            <button
              onClick={() => {
                setTasks(tasks.filter((t) => t.id !== task.id));
              }}
              className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-lg transition"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>

      {tasks.length === 0 && (
        <p className="text-gray-500 text-center mt-6">🗒️ No tasks available</p>
      )}
    </div>
  );
}
