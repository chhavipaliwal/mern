import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";

async function fetchData() {
  const response = await axios.post("http://localhost:3000/", {
    body: {
      name: "John Doe",
      age: 30,
      city: "New York",
    },
  });
  return response.data;
}

function App() {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetchData()
      .then((data) => {
        setData(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);
  console.log("Data fetched:", data);
  return <>Hello world!</>;
}

export default App;
