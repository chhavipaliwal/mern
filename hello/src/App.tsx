// import "./App.css";
// import Home from "./components/Home/Home";

// // import Counter from "../hooks/useState";
// // import Posts from "../hooks/useEffect";
// //import Layout from "../hooks/useLayoutEffect";
// //import Counter from "../hooks/useReducer/useReducer";
// // import Memory from "../hooks/useMemo";
// // import App2 from "./app2";

// function App() {
//   return (
//     <>
//       {/* <Counter /> */}
//       {/* <Posts /> */}
//       {/* <Layout /> */}
//       {/*  the line below to use the Counter component */}
//       {/* <Counter /> */}

//       {/* <div className="bg-gray-500 text-black text-xl ">
//         <Memory />
//       </div> */}
//       {/* <App2 /> */}
//       <Home />
//     </>
//   );
// }

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
