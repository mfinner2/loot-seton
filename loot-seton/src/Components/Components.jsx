import Home from "./Home/Home.jsx"
import NewNote from "./NewNote/NewNote.jsx"
import Nav from "./Nav/Nav.jsx"
import AuthModule from "./Auth/Auth.jsx";
import AuthLogin from "./Auth/AuthLogin.jsx";
import AuthRegister from "./Auth/AuthRegister.jsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


const Components = () => {
    //set up routing
   return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<AuthModule />} />
        <Route path="/login" element={<AuthLogin />} />
        <Route path="/register" element={<AuthRegister />} />
        <Route path="/home" element={<Home />} />
        <Route path="/new" element={<NewNote />} />
      </Routes>
    </Router>
   )
}

export default Components;