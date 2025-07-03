import React, { useState, useLayoutEffect, use } from "react";

export default function Layout() {
  const [color, setColor] = useState("aqua");

  useLayoutEffect(() => {
    document.body.style.backgroundColor = color;
  }, [color]);
  const changeColor = () => {
    setColor(color === "aqua" ? "lightcoral" : "aqua");
  };

  return <></>;
}
