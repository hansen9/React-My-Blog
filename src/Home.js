import BlogList from "./Components/BlogList";
import useFetch from "./UseFetch";

const Home = () => {
    const {data: blogs, isLoading, error} = useFetch("http://localhost:8000/blogs")

  // const [name, setName] = useState('unknown person')
  // const [age, setAge] = useState(0)
  //   const [name,setName] = useState('Mario')
  //   const handleDelete = (id) => {
  //         const newBlogs = blogs.filter(blog => blog.id !== id)
  //         setBlogs(newBlogs)
  //   }
  // const handleClick = (e) => {
  //     console.log(e)
  //     name = setName('hello world')
  // }
  // const handleClickAgain = (name, e) => {
  //     name = setName('hello world again ' + name)
  //     console.log(e.target)
  // }
  // const handleClick = () => {
  //     setName('Hansen')
  //     setAge(24)
  // }
  return (
    <div className="home">
      {/* <h2>Homepage</h2>
            <button onClick={handleClick}>click me</button> */}
      {/* <button onClick={(e) => handleClickAgain('hansen', e)}>click me again</button> */}
      {/* <p>{ name } is { age } years old</p> */}
      {error && <div>{ error }</div>}
      {isLoading && <div>...Loading</div>}
      {blogs && (
        <BlogList
          blogs={blogs}
          title="All blogs"
        //   handleDelete={handleDelete}
        ></BlogList>
      )}
      {/* <BlogList
        blogs={blogs.filter((blog) => blog.author === "mario")}
        title="Mario's blogs"
      ></BlogList>
      <BlogList
        blogs={blogs.filter((blog) => blog.author === "yoshi")}
        title="Yoshi's blogs"
      ></BlogList> */}
      {/* <button onClick={() => setName('hansen')}>change name</button>
      <p>{ name }</p> */}
    </div>
  );
};

export default Home;
