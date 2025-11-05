import { useEffect, useState } from "react";
import Blog from "./Blog";
import { Link } from "react-router-dom";


const Blogs = () => {
    const [blogs, setBlogs] = useState([]);
    const [blogsLength, setBlogsLength] = useState([4])

    useEffect(()=>{
        fetch('blogs.json')
        .then(res =>res.json())
        .then(data=>setBlogs(data))
    } ,[])
    return (
        <div className="container mx-auto mb-20">
            <div className="flex items-center justify-between">
                <h1 class="text-3xl font-bold mb-8 dark:text-black">Blogs</h1>
                <Link to="/blogs"><p className="text-xl dark:text-[#333333]">See all</p></Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {
                    blogs.slice(0,blogsLength).map((blog)=><Blog blog={blog}></Blog>)
                }
            </div>
        </div>
    );
};

export default Blogs;