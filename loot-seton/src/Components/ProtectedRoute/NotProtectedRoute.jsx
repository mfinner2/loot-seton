import { Navigate, useNavigate } from "react-router-dom";
import Parse from 'parse'

// Once logged in, cannot go to /login or /register
const NotProtectedRoute = ({ element: Component, flag, ...rest }) => {
  const navigate = useNavigate();
  const goBackHandler = () => {
    navigate("/");
  };
  return (
    <div>
      {Parse.User.current()?.authenticated ? (
        <Navigate to={"/home"} replace />
      ) : (
        <Component />
      )}
    </div>
  );
};

export default NotProtectedRoute;
