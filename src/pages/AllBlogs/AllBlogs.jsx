import { useEffect, useState } from "react";
import AllBlog from "./AllBlog";


const AllBlogs = () => {
    const [allBlogs, setAllBlogs] = useState([])

    useEffect(() =>{
        fetch('blogs.json')
        .then(res =>res.json())
        .then(data =>setAllBlogs(data))
    }, [])
    return (
        <div className="container mx-auto mt-12 mb-12">
            <h1 class="text-2xl font-medium text-center mb-8 dark:text-black">All Blogs</h1>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {
                    allBlogs.map((allBlog) =><AllBlog allBlog = {allBlog}></AllBlog>)
                }
            </div>
        </div>
    );
};

export default AllBlogs;