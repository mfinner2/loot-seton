import Home from "./Home/Home.jsx"
import NewNote from "./NewNote/NewNote.jsx"
import AuthModule from "./Auth/Auth.jsx";
import AuthLogin from "./Auth/AuthLogin.jsx";
import AuthRegister from "./Auth/AuthRegister.jsx";
import ProtectedRoute from "./ProtectedRoute/ProtectedRoute.jsx";
import NotProtectedRoute from "./ProtectedRoute/NotProtectedRoute.jsx";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";

// Auth, login, register cannot be reached when logged in
// home and newnote cannot be reached unless logged in

// FUTURE WORK: add a path to future paths
// nav was moved to home and newnote
const Components = () => {
    //set up routing
   return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<NotProtectedRoute path="/" element={AuthModule} />}
        />
        <Route
          path="/login"
          element={<NotProtectedRoute path="/login" element={AuthLogin} />}
        />
        <Route
          path="/register"
          element={<NotProtectedRoute path="/register" element={AuthRegister} />}
        />
        <Route
          path="/home"
          element={<ProtectedRoute path="/home" element={Home} />}
        />
        <Route
          path="/new"
          element={<ProtectedRoute path="/new" element={NewNote} />}
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
   )
}

export default Components;