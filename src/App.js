import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Create from "./Create";
import Home from "./Home";
import NavBar from "./Components/NavBar";
import BlogDetails from "./BlogDetails";
import NotFound from "./NotFound";
import Login from "./Login";
import Register from "./Register";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar></NavBar>
        <div className="content">
          <Routes>
            <Route path="/register" Component={Register}></Route>
            <Route path="/login" Component={Login}></Route>
            <Route path="/" Component={Home}></Route>
            <Route path="/create" Component={Create}></Route>
            <Route path="/blogs/:id" Component={BlogDetails}></Route>
            <Route path="*" Component={NotFound}></Route>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
