import { Navigate, useNavigate } from "react-router-dom";
import Parse from 'parse'

const ProtectedRoute = ({ element: Component, flag, ...rest }) => {
  const navigate = useNavigate();
  const goBackHandler = () => {
    navigate("/");
  };
  return (
    <div>
      {Parse.User.current()?.authenticated ? (
        <Component />
      ) : (
        <Navigate to={"/"} replace />
      )}
    </div>
  );
};

export default ProtectedRoute;
