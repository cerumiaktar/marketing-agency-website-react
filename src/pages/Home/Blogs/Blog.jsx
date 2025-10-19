

const Blog = ({blog}) => {
    const {id, img, title, description} = blog;
    return (
        <div>
            <h1>{title}</h1>
        </div>
    );
};

export default Blog;