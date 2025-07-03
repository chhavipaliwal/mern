import "./App.css";
// import Counter from "../hooks/useState";
// import Posts from "../hooks/useEffect";
//import Layout from "../hooks/useLayoutEffect";
//import Counter from "../hooks/useReducer/useReducer";
import Memory from "../hooks/useMemo";

function App() {
  return (
    <>
      {/* <Counter /> */}
      {/* <Posts /> */}
      {/* <Layout /> */}
      {/*  the line below to use the Counter component */}
      {/* <Counter /> */}

      <div className="bg-gray-500 text-black text-xl ">
        <Memory />
      </div>
    </>
  );
}

export default App;
