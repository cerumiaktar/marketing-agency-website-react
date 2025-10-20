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
        <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4">
                {
                    allBlogs.map((allBlog) =><AllBlog allBlog = {allBlog}></AllBlog>)
                }
            </div>
        </div>
    );
};

export default AllBlogs;