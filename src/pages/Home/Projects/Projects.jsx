import { useEffect, useState } from "react";
import Project from "./Project";


const Projects = () => {
    
    const [projects, setProjects] = useState([])

    useEffect(() =>{
        fetch('projects.json')
        .then(res=>res.json())
        .then(data=>setProjects(data))
    } ,[])

    return (
        <div className="container mx-auto mb-20">
            <div className="text-center">
                <h1 class="text-2xl font-bold mb-8">Our Completed Projects</h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 ">
                {
                    projects.map((project) =><Project project={project}></Project>)
                }
            </div>
        </div>
    );
};

export default Projects;