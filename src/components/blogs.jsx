import { useEffect, useState } from "react";

const Blogs = () => {
  const [datahere, setDatahere] = useState([]);
  useEffect(() => {
    const loaddata = async () => {
      const res = await fetch("blogs.json");
      const data = await res.json();
      setDatahere([...datahere,data])
    };
    loaddata()
    
  }, []);
const value=datahere[0]
console.log(value)
  return <div></div>;
};
export default Blogs;
