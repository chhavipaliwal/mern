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
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
export default App;
