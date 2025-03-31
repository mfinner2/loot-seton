import { Navigate, useNavigate } from "react-router-dom";

const ProtectedRoute = ({ element: Component, flag, ...rest }) => {
  const navigate = useNavigate();
  const goBackHandler = () => {
    navigate("/");
  };
  return (
    <div>
      {flag ? (
        <Component />
      ) : (
        <div>
          <p>Unauthorized</p>
          <button onClick={goBackHandler}>Go Back</button>
        </div>
      )}
    </div>
  );
};

export default ProtectedRoute;
