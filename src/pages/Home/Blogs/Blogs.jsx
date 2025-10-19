import { useEffect, useState } from "react";
import Blog from "./Blog";


const Blogs = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(()=>{
        fetch('blogs.json')
        .then(res =>res.json())
        .then(data=>setBlogs(data))
    } ,[])
    return (
        <div className="container mx-auto mb-20">
            <div className="flex items-center justify-between">
                <h1 class="text-2xl font-medium mb-8 dark:text-black">Blogs</h1>
                <p className="text-lg">See all</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {
                    blogs.map((blog)=><Blog blog={blog}></Blog>)
                }
            </div>
        </div>
    );
};

export default Blogs;