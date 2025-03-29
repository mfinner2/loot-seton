import { useEffect, useState } from "react";
import Parse from "parse";
import ProtectedRoute from "../../Services/ProtectedRoute.js";
import MainGood from "../Main/Main.js";

const CheckAuth = () => {
  const [flag, setFlag] = useState(false);

  var check = Parse.User.current(); //actually use a useRef of some sort
  useEffect(() => {
    if (check && check.authenticated()) {
      console.log("authenticated");
      setFlag(true);
    } else {
      console.log("not authenticated");
      setFlag(false);
    }
  }, [check]);

  return (
    <div>
      <ProtectedRoute exact path="/user" flag={flag} element={MainGood} />
    </div>
  );
};

export default CheckAuth;
