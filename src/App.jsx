import { useEffect, useState } from "react";
import Navber from "./components/navber";
import "./App.css";
import Blogs from "./components/blogs";

function App() {
  const [blogCount, setBlogCount] = useState(0);
  const [time,setTime]=useState(0);
  const reading=(value)=>{
    setTime(time+value)
  }
  const [bookmarkcount, setBookmarkcount] = useState(0);
  const [books, setBooks] = useState([]);
  const bokish = (value) => {
    if(books.includes(value)){
      const filtered=books.filer((el)=>el!==value);
      setBooks(filtered)
    }
    setBooks([...books, value]);
     setBookmarkcount(bookmarkcount + 1);
  };

  const bad=(value)=>{
    const filtered=books.filter((el)=>el!==value);
    setBooks(filtered)
    setBookmarkcount(bookmarkcount-1);
  }
  return (
    <>
      <Navber></Navber>

      <div className="Main-container  mb-[50px] flex flex-col md:flex-row gap-[20px] px-5 md:px-20 lg:px-[100px] pt-4   md:pt-[20px]">
        <div className="w-[100%] md:w-[70%] p-10px">
          <h2 className="mb-[30px] ml-[10px] font-bold text-[24px]">
            Blogs Total:{blogCount}
          </h2>
          <Blogs bad={bad} reading={reading}
            bokish={bokish}
            
            setBlogCount={setBlogCount}
          ></Blogs>
        </div>
        <div className="w-[100%]  md:w-[30%] p-[40px] border-2 rounded-xl flex flex-col items-center">
          <h2 className="font-bold text-[24px]">Reading Time:{time}</h2>
          <h2 className="font-bold text-[24px] mb-[50px]">
            Bookmark Count:{bookmarkcount}
          </h2>
          <ol className="text-">
            {books.map((el, index) => (
              <li className="font-bold ">
                {index + 1}. {el}
              </li>
            ))}
          </ol>
        </div>
      </div>
    </>
  );
}

export default App;
