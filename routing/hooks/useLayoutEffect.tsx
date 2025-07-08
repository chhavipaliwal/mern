import { useState, useLayoutEffect } from "react";

export default function Layout() {
  const [color, setColor] = useState("aqua");

  useLayoutEffect(() => {
    document.body.style.backgroundColor = color;
  }, [color]);

  return (
    <>
      <h2 className="text-bold">current background:{color}</h2>
      <button onClick={() => setColor("aqua")}>Aqua</button>
      <button onClick={() => setColor("blue")}>Blue</button>
      <button onClick={() => setColor("green")}>Green</button>
    </>
  );
}
