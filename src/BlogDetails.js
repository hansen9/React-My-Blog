import { useNavigate, useParams } from "react-router-dom";
import useFetch from "./UseFetch";
import { useEffect, useState } from "react";

const BlogDetails = () => {
  const [edit, setEdit] = useState(false);
  const [textAreaValue, setTextAreaValue] = useState("");
  const { id } = useParams();
  const {
    data: blog,
    error,
    isLoading,
  } = useFetch("http://localhost:8000/blogs/" + id);
  useEffect(() => {
    if (blog) {
      setTextAreaValue(blog.body);
    }
  }, [blog]);
  const navigate = useNavigate();

  const handleClick = () => {
    fetch("http://localhost:8000/blogs/" + blog.id, {
      method: "DELETE",
    }).then(() => {
      navigate("/");
    });
  };
  const toggleEdit = () => {
    setEdit(!edit);
  };
  const handleEdit = (e) => {
    e.preventDefault();
    const title = blog.title
    const author = blog.author
    const body = textAreaValue
    // update api
    // setIsLoadding(true)
    const blogUpdated = {title, body, author}

    fetch("http://localhost:8000/blogs/" + id, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blogUpdated),
    }).then(() => {
      console.log("body updated");
      navigate('/');
    })
    setEdit(false);
  };
  const handleChange = (e) => {
    setTextAreaValue(e.target.value);
  };

  return (
    <div className="blog-details">
      {isLoading && <div>...Loading</div>}
      {error && <div>{error}</div>}
      {blog && (
        <article>
          <h2>{blog.title}</h2>
          <p>Written by {blog.author}</p>
          {!edit && <button onClick={toggleEdit}>edit</button>}
          <div>
            {!edit && blog.body}
            {edit && (
              <form onSubmit={handleEdit}>
                <textarea
                  //   required
                  value={textAreaValue}
                  onChange={handleChange}
                ></textarea>
                <button>change</button>
              </form>
            )}
          </div>
          <button onClick={handleClick}>delete</button>
        </article>
      )}
    </div>
  );
};

export default BlogDetails;
