import { useEffect, useState } from "react";
import Blog from "./blog";
const Blogs = ({ setBlogCount }) => {
  const [datahere, setDatahere] = useState([]);

  useEffect(() => {
    const loaddata = async () => {
      const res = await fetch("blogs.json");
      const data = await res.json();

      setDatahere(data);
      setBlogCount(data.length);
    };

    loaddata();
  }, []);

  return <div>
    <Blog datahere={datahere}></Blog>
  </div>;
};

export default Blogs;
