const Blog = ({ datahere }) => {
  console.log(datahere);
  return <div className="grid grid-cols-1 md:grid-cols-2  gap-[20px]">
    {
        datahere.map((el)=>(
<div className="card bg-base-100 w-fit shadow-sm flex flex-col gap-[5px] h-96 border-2 rounded-xl p-[10px]">
  <div className="card-body">
    <h2 className="card-title font-bold text-[32px]">{el.title}</h2>
   
  </div>
   <figure className="h-[200px] w-full overflow-hidden rounded-xl">
    <img
      className="w-full h-full object-cover"
      src={el.cover}
      alt={el.title}
    />
  </figure>
      <div className="card-actions ">
      <button className="btn btn-primary bg-blue-400 p-[10px] rounded-xl font-bold text-[16px] " >Mark As Read</button>
    </div>

</div>
        ))
    }
    
  </div>;
};
export default Blog;
