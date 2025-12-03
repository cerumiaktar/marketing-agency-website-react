import { useEffect, useState } from "react";
import AllBlog from "./AllBlog";


const AllBlogs = () => {
    const [allBlogs, setAllBlogs] = useState([])

    useEffect(() => {
        fetch('blogs.json')
            .then(res => res.json())
            .then(data => setAllBlogs(data))
    }, [])
    return (
        <div className="container mx-auto mt-12 mb-12">
            <div
                className="hero h-[200px] mb-12 rounded-xl"
                style={{
                    backgroundImage:
                        "url(https://i.ibb.co.com/5hmn8KLq/Rectangle-4.png)",
                }}
            >
                <div className="hero-overlay rounded-xl"></div>
                <div className="hero-content text-neutral-content text-center">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">All Blogs</h1>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {
                    allBlogs.map((allBlog) => <AllBlog allBlog={allBlog}></AllBlog>)
                }
            </div>
        </div>
    );
};

export default AllBlogs;