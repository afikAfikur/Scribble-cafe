import { FcBookmark } from "react-icons/fc";
const Blog = ({ datahere,incrising,bokish,reading,bad }) => {
  

  const handlebtn=(title)=>{
    
    bokish(title)
  }
  const handlemark=(value,title)=>{
    reading(value)
    bad(title)
  }
  return (
    <div className="grid grid-cols-1 md:grid-cols-2  gap-[20px]">
      {datahere.map((el) => (
        
        <div  className="card bg-base-100 w-fit shadow-sm flex flex-col gap-[5px] h-96 border-2 rounded-xl p-[10px]">
          <div className="card-body">
            <h2 className="card-title font-bold text-[32px]">{el.title}</h2>
          </div>
          <div className="flex justify-between">
            <div className="flex gap-[15px]">
              <h2 className="text-[16px]">
                <span className="font-bold">Auther Name: </span>
                {el.author}
              </h2>
              <img className="w-[24px] h-fit" src={el.author_img} alt="" />
            </div>
            <div>
              <h2 className="font-bold">
                {
                  el.hashtags.map((item)=><span className="mr-[5px]"> #{item}</span>)
                }
              </h2>
            </div>
          </div>
          <figure className="h-[200px] w-full overflow-hidden rounded-xl">
            <img
              className="w-full h-full object-cover"
              src={el.cover}
              alt={el.title}
            />
          </figure>
          <div className="card-actions flex items-center justify-between mt-[10px]">
            <button onClick={()=>handlemark(el.reading_time,el.title
)} className="btn btn-primary bg-blue-400 p-[10px] rounded-xl font-bold text-[16px] ">
              Mark As Read
            </button>
            <button onClick={()=>handlebtn(el.title)} className="bookmark mr-[5px] w-"><FcBookmark size={25}  /></button>
          </div>
        </div>
      ))}
    </div>
  );
};
export default Blog;
