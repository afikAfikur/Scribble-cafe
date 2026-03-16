import { useState } from "react";
import Navber from "./components/navber";
import "./App.css";
import Blogs from "./components/blogs";

function App() {

  const [blogCount, setBlogCount] = useState(0);
  return (
    <>
      <Navber></Navber>

      <div className="Main-container  flex flex-col md:flex-row gap-[20px] px-5 md:px-20 lg:px-[100px] pt-4   md:pt-[20px]">
        <div className="w-[100%] md:w-[70%] p-10px">
          <h2 className="mb-[30px] ml-[10px] font-bold text-[24px]">Blogs Total:{blogCount}</h2>
          <Blogs setBlogCount={setBlogCount}></Blogs>
        </div>
        <div className="w-[100%]  md:w-[30%] p-[10px]">
          <h2 className="font-bold text-[24px]">Reading Time:</h2>
          <h2 className="font-bold text-[24px]">Bookmark Count:</h2>
        </div>
      </div>
    </>
  );
}

export default App;
