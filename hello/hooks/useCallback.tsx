import React from "react";

const Button = React.memo(({ onClick }: { onClick: () => void }) => {
  console.log("Button rendered:");
  return (
    <button
      onClick={onClick}
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    >
      Click Me
    </button>
  );
});
export default Button;
