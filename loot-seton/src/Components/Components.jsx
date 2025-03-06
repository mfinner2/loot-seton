import Home from "./Home/Home.jsx"
import NewNote from "./NewNote/NewNote.jsx"
import Nav from "./Nav/Nav.jsx"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


const Components = () => {
/*    return (
        <div>
            <Nav />
            <Home />
            <NewNote />
        </div>
    )*/
   return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new" element={<NewNote />} />
      </Routes>
    </Router>
   )
}

export default Components;